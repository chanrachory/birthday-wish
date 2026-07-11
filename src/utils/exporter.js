export function buildStandaloneHtml(from, to, wish, cssContent) {
  return `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Happy Birthday, ${to || 'Friend'}! 🎂</title>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Kantumruy Pro", sans-serif;
      background: linear-gradient(135deg, #fce4ec, #f8bbd0 50%, #fce4ec);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      padding: 20px;
      margin: 0;
    }
    ${cssContent}
    .ov-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
      width: 100%;
      max-height: 100vh;
      overflow: hidden;
      margin-top: -40px;
    }
    .ov-title {
      font-family: "Playfair Display", serif;
      font-style: italic;
      font-size: clamp(1.1rem, 4vw, 1.6rem);
      color: #ad1457;
      text-align: center;
      padding: 0 20px;
      max-height: 60px;
      overflow: hidden;
      transition: max-height .3s, opacity .3s, margin .3s;
      margin-bottom: 4px;
      animation: fdD .6s ease both;
      z-index: 10;
      flex-shrink: 0;
    }
    .ov-title.gone {
      opacity: 0;
      max-height: 0;
      margin-bottom: 0;
      pointer-events: none;
    }
    @keyframes fdD {
      from { opacity: 0; transform: translateY(-14px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="ov-content">
    <div class="ov-title" id="ttl">Happy Birthday, ${to || 'Friend'}! 🎉</div>
    <div class="stage" id="stage">
      <div class="wrapper" id="wr">
        <div class="card" id="card">
          <div class="ht">💕</div>
          <div class="cto">Dear ${to || 'Friend'}</div>
          <div class="msg" id="cMsg"></div>
          <div class="frm">— ${from || 'Someone'} 💗</div>
        </div>
        <div class="lid one"></div>
        <div class="lid two"></div>
        <div class="flap"></div>
      </div>
    </div>
    <div class="hint" id="hint">✨ ចុចលើស្រោមសំបុត្រដើម្បីបើក ✨</div>
  </div>

  <script>
    (function () {
      // Set wish message safely to handle newlines
      document.getElementById('cMsg').textContent = ${JSON.stringify(wish)};

      // Create falling petals
      for (var i = 0; i < 18; i++) {
        var p = document.createElement('div');
        p.className = 'pt';
        p.style.left = Math.random() * 100 + '%';
        p.style.width = (7 + Math.random() * 11) + 'px';
        p.style.height = (7 + Math.random() * 11) + 'px';
        p.style.animationDuration = (5 + Math.random() * 9) + 's';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.opacity = (.25 + Math.random() * .5).toString();
        document.body.appendChild(p);
      }

      var opened = false;
      var stage = document.getElementById('stage');
      var wr = document.getElementById('wr');
      var card = document.getElementById('card');
      var ttl = document.getElementById('ttl');
      var hint = document.getElementById('hint');

      function confetti() {
        var cl = ['#f48fb1', '#e91e8c', '#f06292', '#f8bbd0', '#ad1457', '#d4af6a', '#fff9c4'];
        var sh = ['50%', '3px', '50% 0 50% 0'];
        for (var i = 0; i < 60; i++) {
          (function (i) {
            setTimeout(function () {
              var c = document.createElement('div');
              c.className = 'cf';
              var s = 5 + Math.random() * 9;
              c.style.cssText = 'left:' + (3 + Math.random() * 94) + '%;top:-12px;width:' + s + 'px;height:' + s + 'px;background:' + cl[Math.floor(Math.random() * cl.length)] + ';border-radius:' + sh[Math.floor(Math.random() * sh.length)] + ';animation-delay:' + Math.random() + 's;animation-duration:' + (2 + Math.random() * 1.8) + 's';
              document.body.appendChild(c);
              setTimeout(function () { c.remove() }, 5000);
            }, i * 28);
          })(i);
        }
      }

      stage.addEventListener('click', function () {
        if (opened) return;
        opened = true;

        wr.classList.add('open');
        ttl.classList.add('gone');
        hint.style.opacity = '0';

        setTimeout(function () {
          card.classList.add('show');
        }, 800);

        setTimeout(confetti, 1200);
      });
    })();
  </script>
</body>
</html>`;
}
