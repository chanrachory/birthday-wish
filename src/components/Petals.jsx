import React, { useEffect, useState } from 'react';

export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 18; i++) {
      list.push({
        id: i,
        left: Math.random() * 100 + '%',
        width: (7 + Math.random() * 11) + 'px',
        height: (7 + Math.random() * 11) + 'px',
        animationDuration: (5 + Math.random() * 9) + 's',
        animationDelay: Math.random() * 8 + 's',
        opacity: (.25 + Math.random() * .5).toString(),
      });
    }
    setPetals(list);
  }, []);

  return (
    <>
      {petals.map(p => (
        <div
          key={p.id}
          className="pt"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  );
}
