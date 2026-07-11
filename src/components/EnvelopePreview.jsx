import React, { useState, useEffect } from 'react';

export default function EnvelopePreview({ isOpen, onClose, from, to, wish }) {
  const [opened, setOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setOpened(false);
      setShowCard(false);
    }
  }, [isOpen]);

  const triggerConfetti = () => {
    const cl = ['#f48fb1', '#e91e8c', '#f06292', '#f8bbd0', '#ad1457', '#d4af6a', '#fff9c4'];
    const sh = ['50%', '3px', '50% 0 50% 0'];
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        c.className = 'cf';
        const s = 5 + Math.random() * 9;
        c.style.cssText = `left:${3 + Math.random() * 94}%;top:-12px;width:${s}px;height:${s}px;background:${cl[Math.floor(Math.random() * cl.length)]};border-radius:${sh[Math.floor(Math.random() * sh.length)]};animation-delay:${Math.random()}s;animation-duration:${2 + Math.random() * 1.8}s`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
      }, i * 28);
    }
  };

  const handleStageClick = () => {
    if (opened) return;
    setOpened(true);

    // Show card after 800ms
    setTimeout(() => {
      setShowCard(true);
    }, 800);

    // Trigger confetti after 1200ms
    setTimeout(() => {
      triggerConfetti();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div id="overlay" className="on">
      <button className="ov-close" onClick={onClose}>✕</button>
      
      <div className="ov-content">
        <div className={`ov-title ${opened ? 'gone' : ''}`}>
          Happy Birthday, {to || 'Friend'}! 🎉
        </div>

        <div className="stage" id="stage" onClick={handleStageClick}>
          <div className={`wrapper ${opened ? 'open' : ''}`} id="wrapper">
            <div className={`card ${showCard ? 'show' : ''}`} id="card">
              <div className="ht">💕</div>
              <div className="cto">Dear {to || 'Friend'}</div>
              <div className="msg">{wish}</div>
              <div className="frm">— {from || 'Someone'} 💗</div>
            </div>
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="flap"></div>
          </div>
        </div>

        <div className="hint" style={{ opacity: opened ? 0 : 1 }}>
          ✨ ចុចលើស្រោមសំបុត្រដើម្បីបើក ✨
        </div>
      </div>
    </div>
  );
}
