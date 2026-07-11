import React from 'react';

export default function CreatorForm({ from, setFrom, to, setTo, wish, setWish, onSave, onGenerate }) {
  return (
    <div className="container">
      <h2>🎂 Birthday Wishes</h2>
      <div className="field">
        <label>From (ឈ្មោះអ្នក)</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Your name…"
        />
      </div>
      <div className="field">
        <label>To (ឈ្មោះម្ចាស់ខួប)</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Birthday person…"
        />
      </div>
      <div className="field">
        <label>Wish Message (ពាក្យជួនពរ)</label>
        <textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Write your heartfelt wish…"
        />
      </div>
      <div className="btn-row">
        <button className="btn-save" onClick={onSave}>💾 Save</button>
        <button className="btn-share" onClick={onGenerate}>🎁 Generate</button>
      </div>
    </div>
  );
}
