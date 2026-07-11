import React, { useState, useEffect } from 'react';
import './cardStyles.css'; // import to render preview styles in React app
import Petals from './components/Petals';
import CreatorForm from './components/CreatorForm';
import ShareBox from './components/ShareBox';
import EnvelopePreview from './components/EnvelopePreview';
import { buildStandaloneHtml } from './utils/exporter';
import cardStylesRaw from './cardStyles.css?raw';

export default function App() {
  const [from, setFrom] = useState(() => localStorage.getItem('bf') || '');
  const [to, setTo] = useState(() => localStorage.getItem('bt') || '');
  const [wish, setWish] = useState(() => localStorage.getItem('bw') || '');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastActive, setToastActive] = useState(false);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setToastActive(true);
  };

  useEffect(() => {
    if (toastActive) {
      const timer = setTimeout(() => setToastActive(false), 3200);
      return () => clearTimeout(timer);
    }
  }, [toastActive]);

  const handleSave = () => {
    localStorage.setItem('bf', from);
    localStorage.setItem('bt', to);
    localStorage.setItem('bw', wish);
    triggerToast('✅ Saved!');
  };

  const handleGenerate = () => {
    if (!wish.trim()) {
      triggerToast('⚠️ Write a wish first!');
      return;
    }
    setIsGenerated(true);
    triggerToast('🎀 Ready! Download & send via Telegram');
  };

  const handleDownload = () => {
    const htmlContent = buildStandaloneHtml(from, to, wish, cardStylesRaw);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'birthday-card.html';
    a.click();
    URL.revokeObjectURL(url);
    triggerToast('✅ Downloaded! Send via Telegram 📱');
  };

  return (
    <div className="app-root">
      <Petals />
      <CreatorForm
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        wish={wish}
        setWish={setWish}
        onSave={handleSave}
        onGenerate={handleGenerate}
      />
      <ShareBox
        isVisible={isGenerated}
        onDownload={handleDownload}
        onPreview={() => setIsPreviewOpen(true)}
      />
      <EnvelopePreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        from={from}
        to={to}
        wish={wish}
      />
      <div className={`toast ${toastActive ? 'show' : ''}`}>{toastMsg}</div>
    </div>
  );
}
