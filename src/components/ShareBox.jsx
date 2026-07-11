import React from 'react';

export default function ShareBox({ isVisible, onDownload, onPreview }) {
  if (!isVisible) return null;

  return (
    <div id="share-box" style={{ display: 'block' }}>
      <div className="share-title">🎀 Share via Telegram / WhatsApp</div>
      <div className="telegram-tip">
        <strong>📱 របៀប Share ក្នុង Telegram:</strong>
        <div className="step">
          <div className="num">1</div>
          <div>ចុច <strong>⬇️ Download</strong> ខាងក្រោម</div>
        </div>
        <div className="step">
          <div className="num">2</div>
          <div>បើក Telegram → ចុច 📎 → ជ្រើស <code>birthday-card.html</code> → Send</div>
        </div>
        <div className="step">
          <div className="num">3</div>
          <div>ម្ចាស់ខួបចុចលើ file → browser បើក → ឃើញស្រោមសំបុត្រ 💌</div>
        </div>
      </div>
      <button className="btn-dl" onClick={onDownload}>⬇️ Download birthday-card.html</button>
      <button className="btn-pv" onClick={onPreview}>👁️ Preview ស្រោមសំបុត្រ</button>
    </div>
  );
}
