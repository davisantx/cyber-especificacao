import fs from 'fs';

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Teste Visual Novel: Bia no Cenário da Sala de Aula</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: monospace;
    }
    .stage {
      position: relative;
      width: 1024px;
      height: 576px;
      overflow: hidden;
      box-shadow: 0 0 50px rgba(0,0,0,0.8);
      border: 4px solid #334155;
    }
    .scenery {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
    }
    .character {
      position: absolute;
      bottom: 0px;
      left: 60px;
      height: 480px;
      z-index: 10;
      filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7));
      image-rendering: pixelated;
    }
    .vignette {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%);
      z-index: 15;
      pointer-events: none;
    }
    .dialogue-box {
      position: absolute;
      bottom: 20px;
      left: 40px;
      right: 40px;
      background: rgba(15, 23, 42, 0.95);
      border: 3px solid #38bdf8;
      border-radius: 8px;
      padding: 16px 24px;
      color: #f8fafc;
      z-index: 20;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    }
    .char-name {
      display: inline-block;
      background: #0284c7;
      color: #fff;
      font-weight: 900;
      font-size: 14px;
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 8px;
      letter-spacing: 0.1em;
    }
    .dialogue-text {
      font-size: 16px;
      line-height: 1.5;
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="stage">
    <img class="scenery" src="./src/assets/sceneries/sala_de_aula.jpg" alt="Sala de Aula" />
    <img class="character" src="./test_bia_transparent.png" alt="Bia" />
    <div class="vignette"></div>
    <div class="dialogue-box">
      <div class="char-name">BIA [7º ANO A]</div>
      <div class="dialogue-text">"Gente, eu juro que não peguei o dinheiro da rifa! Eu fui na farmácia comprar os remédios da minha avó... Olhem a sacola!"</div>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync('test-stage.html', html);
console.log('Saved test-stage.html');
