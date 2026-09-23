---
marp: true
html: true
theme: gaia
paginate: true
style: |
  /* ═══════════════════════════════════════════════════════════════
     TEMA "ARCADE 16-BITS"
     Céu roxo→azul com estrelas · grade synthwave em perspectiva
     scanlines CRT · neon amarelo / ciano / lilás
     Tipografia: Syne (títulos) · DM Sans (texto) · DM Mono (código e selos)
     ═══════════════════════════════════════════════════════════════ */
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');


  /* ── Forçar a renderização exata das cores e backgrounds no PDF ── */
  @media print {
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }


  /* ── Tokens de cor ── */
  section {
    --yellow:   #FACC15;
    --yellow-2: #FDE047;
    --amber:    #EAB308;
    --sky:      #38BDF8;
    --sky-2:    #7DD3FC;
    --purple:   #A855F7;
    --purple-2: #D8B4FE;
    --pink:     #F0ABFC;
    --text:     #E2E8F0;
    --text-2:   #CBD5E1;
    --void:     #020617;
    --line:     rgba(216, 180, 254, 0.30);
    --floor:    url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 340' width='1280' height='340'%3E%3Cdefs%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='340'%3E%3Cstop offset='0' stop-color='%23A855F7' stop-opacity='0'/%3E%3Cstop offset='.35' stop-color='%23A855F7' stop-opacity='.7'/%3E%3Cstop offset='1' stop-color='%23A855F7' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cline x1='640.0' y1='0' x2='-816.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-712.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-608.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-504.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-400.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-296.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-192.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-88.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='16.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='120.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='224.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='328.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='432.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='536.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='640.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='744.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='848.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='952.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1056.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1160.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1264.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1368.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1472.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1576.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1680.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1784.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1888.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1992.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='2096.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-816.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-712.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-608.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-504.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-400.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-296.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-192.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-88.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='16.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='120.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='224.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='328.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='432.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='536.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='640.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='744.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='848.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='952.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1056.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1160.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1264.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1368.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1472.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1576.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1680.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1784.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1888.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1992.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='2096.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='0' y1='6.0' x2='1280' y2='6.0' stroke='%23A855F7' stroke-width='4.4' opacity='0.08'/%3E%3Cline x1='0' y1='6.0' x2='1280' y2='6.0' stroke='%23A855F7' stroke-width='1.2' opacity='0.35'/%3E%3Cline x1='0' y1='13.6' x2='1280' y2='13.6' stroke='%23A855F7' stroke-width='4.6' opacity='0.09'/%3E%3Cline x1='0' y1='13.6' x2='1280' y2='13.6' stroke='%23A855F7' stroke-width='1.3' opacity='0.40'/%3E%3Cline x1='0' y1='24.2' x2='1280' y2='24.2' stroke='%23A855F7' stroke-width='4.8' opacity='0.10'/%3E%3Cline x1='0' y1='24.2' x2='1280' y2='24.2' stroke='%23A855F7' stroke-width='1.4' opacity='0.45'/%3E%3Cline x1='0' y1='37.8' x2='1280' y2='37.8' stroke='%23A855F7' stroke-width='5.0' opacity='0.11'/%3E%3Cline x1='0' y1='37.8' x2='1280' y2='37.8' stroke='%23A855F7' stroke-width='1.5' opacity='0.50'/%3E%3Cline x1='0' y1='54.4' x2='1280' y2='54.4' stroke='%23A855F7' stroke-width='5.2' opacity='0.12'/%3E%3Cline x1='0' y1='54.4' x2='1280' y2='54.4' stroke='%23A855F7' stroke-width='1.6' opacity='0.55'/%3E%3Cline x1='0' y1='74.0' x2='1280' y2='74.0' stroke='%23A855F7' stroke-width='5.4' opacity='0.13'/%3E%3Cline x1='0' y1='74.0' x2='1280' y2='74.0' stroke='%23A855F7' stroke-width='1.7' opacity='0.60'/%3E%3Cline x1='0' y1='96.7' x2='1280' y2='96.7' stroke='%23A855F7' stroke-width='5.6' opacity='0.14'/%3E%3Cline x1='0' y1='96.7' x2='1280' y2='96.7' stroke='%23A855F7' stroke-width='1.7' opacity='0.65'/%3E%3Cline x1='0' y1='122.4' x2='1280' y2='122.4' stroke='%23A855F7' stroke-width='5.8' opacity='0.15'/%3E%3Cline x1='0' y1='122.4' x2='1280' y2='122.4' stroke='%23A855F7' stroke-width='1.8' opacity='0.70'/%3E%3Cline x1='0' y1='151.1' x2='1280' y2='151.1' stroke='%23A855F7' stroke-width='6.0' opacity='0.17'/%3E%3Cline x1='0' y1='151.1' x2='1280' y2='151.1' stroke='%23A855F7' stroke-width='1.9' opacity='0.75'/%3E%3Cline x1='0' y1='182.8' x2='1280' y2='182.8' stroke='%23A855F7' stroke-width='6.2' opacity='0.18'/%3E%3Cline x1='0' y1='182.8' x2='1280' y2='182.8' stroke='%23A855F7' stroke-width='2.0' opacity='0.80'/%3E%3Cline x1='0' y1='217.6' x2='1280' y2='217.6' stroke='%23A855F7' stroke-width='6.4' opacity='0.19'/%3E%3Cline x1='0' y1='217.6' x2='1280' y2='217.6' stroke='%23A855F7' stroke-width='2.1' opacity='0.85'/%3E%3Cline x1='0' y1='255.4' x2='1280' y2='255.4' stroke='%23A855F7' stroke-width='6.6' opacity='0.20'/%3E%3Cline x1='0' y1='255.4' x2='1280' y2='255.4' stroke='%23A855F7' stroke-width='2.2' opacity='0.90'/%3E%3Cline x1='0' y1='296.2' x2='1280' y2='296.2' stroke='%23A855F7' stroke-width='6.8' opacity='0.21'/%3E%3Cline x1='0' y1='296.2' x2='1280' y2='296.2' stroke='%23A855F7' stroke-width='2.3' opacity='0.95'/%3E%3Cline x1='0' y1='340.0' x2='1280' y2='340.0' stroke='%23A855F7' stroke-width='7.0' opacity='0.22'/%3E%3Cline x1='0' y1='340.0' x2='1280' y2='340.0' stroke='%23A855F7' stroke-width='2.4' opacity='1.00'/%3E%3Crect x='0' y='0' width='1280' height='2' fill='%23A855F7' opacity='.9'/%3E%3C/svg%3E");      /* chão em grade (SVG) */
  }

  /* ── Base: fundo espacial ── */
  section {
    box-sizing: border-box;
    display: block;
    align-content: flex-start;      /* títulos sempre na mesma altura */
    position: relative;
    isolation: isolate;             /* deixa a grade ficar atrás do conteúdo */
    padding: 64px 72px 84px;
    font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 23px;
    font-weight: 400;
    line-height: 1.55;
    color: var(--text);
    background-color: #000;
    background-repeat: no-repeat;
    background-image:
      url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720' width='1280' height='720'%3E%3Crect x='752' y='254' width='4' height='4' fill='%23FFFFFF' opacity='0.35'/%3E%3Crect x='864' y='130' width='8' height='8' fill='%23FDE047' opacity='0.85'/%3E%3Crect x='696' y='354' width='4' height='4' fill='%237DD3FC' opacity='0.35'/%3E%3Crect x='56' y='418' width='4' height='4' fill='%23FDE047' opacity='0.65'/%3E%3Crect x='1252' y='354' width='4' height='4' fill='%23FFFFFF' opacity='0.85'/%3E%3Crect x='1236' y='334' width='4' height='4' fill='%237DD3FC' opacity='0.65'/%3E%3Crect x='872' y='414' width='4' height='4' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='1024' y='230' width='4' height='4' fill='%23FDE047' opacity='0.25'/%3E%3Crect x='1164' y='162' width='4' height='4' fill='%23D8B4FE' opacity='0.35'/%3E%3Crect x='24' y='278' width='4' height='4' fill='%237DD3FC' opacity='0.85'/%3E%3Crect x='952' y='246' width='4' height='4' fill='%23FDE047' opacity='0.25'/%3E%3Crect x='996' y='386' width='4' height='4' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='1016' y='18' width='8' height='8' fill='%237DD3FC' opacity='0.35'/%3E%3Crect x='940' y='326' width='4' height='4' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='1116' y='34' width='8' height='8' fill='%23FDE047' opacity='0.65'/%3E%3Crect x='28' y='214' width='4' height='4' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='1088' y='138' width='4' height='4' fill='%23FDE047' opacity='0.5'/%3E%3Crect x='900' y='86' width='8' height='8' fill='%237DD3FC' opacity='0.5'/%3E%3Crect x='1024' y='102' width='8' height='8' fill='%237DD3FC' opacity='0.85'/%3E%3Crect x='56' y='262' width='4' height='4' fill='%23FDE047' opacity='0.65'/%3E%3Crect x='1032' y='134' width='8' height='8' fill='%237DD3FC' opacity='0.85'/%3E%3Crect x='1040' y='82' width='8' height='8' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='956' y='54' width='8' height='8' fill='%237DD3FC' opacity='0.35'/%3E%3Crect x='1100' y='98' width='4' height='4' fill='%237DD3FC' opacity='0.65'/%3E%3Crect x='940' y='118' width='4' height='4' fill='%237DD3FC' opacity='0.35'/%3E%3Crect x='56' y='210' width='4' height='4' fill='%237DD3FC' opacity='0.5'/%3E%3Crect x='1264' y='422' width='4' height='4' fill='%23FFFFFF' opacity='0.85'/%3E%3Crect x='1264' y='366' width='4' height='4' fill='%237DD3FC' opacity='0.5'/%3E%3Crect x='1184' y='90' width='4' height='4' fill='%237DD3FC' opacity='0.5'/%3E%3Crect x='1260' y='210' width='4' height='4' fill='%23D8B4FE' opacity='0.85'/%3E%3Crect x='44' y='190' width='4' height='4' fill='%23FDE047' opacity='0.5'/%3E%3Crect x='52' y='346' width='4' height='4' fill='%23FFFFFF' opacity='0.5'/%3E%3Crect x='1204' y='162' width='8' height='8' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='1112' y='14' width='4' height='4' fill='%23D8B4FE' opacity='0.35'/%3E%3Crect x='888' y='158' width='8' height='8' fill='%23FDE047' opacity='0.35'/%3E%3Crect x='988' y='22' width='4' height='4' fill='%23FDE047' opacity='0.65'/%3E%3Crect x='932' y='162' width='4' height='4' fill='%23D8B4FE' opacity='0.35'/%3E%3Crect x='20' y='382' width='4' height='4' fill='%23FDE047' opacity='0.85'/%3E%3Crect x='1084' y='34' width='4' height='4' fill='%23D8B4FE' opacity='0.35'/%3E%3Crect x='52' y='294' width='4' height='4' fill='%237DD3FC' opacity='0.65'/%3E%3Crect x='868' y='74' width='4' height='4' fill='%23FFFFFF' opacity='0.85'/%3E%3Crect x='1256' y='114' width='4' height='4' fill='%237DD3FC' opacity='0.5'/%3E%3Crect x='952' y='26' width='4' height='4' fill='%23D8B4FE' opacity='0.35'/%3E%3Crect x='1004' y='30' width='8' height='8' fill='%237DD3FC' opacity='0.5'/%3E%3Cpath d='M1130,59 Q1130,74 1145,74 Q1130,74 1130,89 Q1130,74 1115,74 Q1130,74 1130,59Z' fill='%23FDE047' opacity='0.95'/%3E%3Cpath d='M940,131 Q940,140 949,140 Q940,140 940,149 Q940,140 931,140 Q940,140 940,131Z' fill='%23D8B4FE' opacity='0.95'/%3E%3Cpath d='M1205,199 Q1205,210 1216,210 Q1205,210 1205,221 Q1205,210 1194,210 Q1205,210 1205,199Z' fill='%237DD3FC' opacity='0.95'/%3E%3Cpath d='M1010,292 Q1010,300 1018,300 Q1010,300 1010,308 Q1010,300 1002,300 Q1010,300 1010,292Z' fill='%23FDE047' opacity='0.95'/%3E%3Cpath d='M52,253 Q52,262 61,262 Q52,262 52,271 Q52,262 43,262 Q52,262 52,253Z' fill='%237DD3FC' opacity='0.95'/%3E%3Cpath d='M1240,373 Q1240,380 1247,380 Q1240,380 1240,387 Q1240,380 1233,380 Q1240,380 1240,373Z' fill='%23D8B4FE' opacity='0.95'/%3E%3Cpath d='M700,34 Q700,42 708,42 Q700,42 700,50 Q700,42 692,42 Q700,42 700,34Z' fill='%237DD3FC' opacity='0.95'/%3E%3Cpolygon points='78.0,43.0 80.2,48.9 86.6,49.2 81.6,53.2 83.3,59.3 78.0,55.8 72.7,59.3 74.4,53.2 69.4,49.2 75.8,48.9' fill='%23FDE047' opacity='0.9'/%3E%3Cpolygon points='1168.0,279.0 1169.7,283.6 1174.7,283.8 1170.8,286.9 1172.1,291.7 1168.0,288.9 1163.9,291.7 1165.2,286.9 1161.3,283.8 1166.3,283.6' fill='%23FDE047' opacity='0.8'/%3E%3Cpolygon points='880.0,224.0 881.5,228.0 885.7,228.1 882.4,230.8 883.5,234.9 880.0,232.5 876.5,234.9 877.6,230.8 874.3,228.1 878.5,228.0' fill='%237DD3FC' opacity='0.9'/%3E%3C/svg%3E"),
      radial-gradient(ellipse 70% 12% at 50% 64%, rgba(217, 70, 239, 0.16), transparent 70%),
      linear-gradient(to bottom, rgba(59, 7, 100, 0.42) 0%, #020617 50%, rgba(23, 37, 84, 0.62) 100%);
    background-size: 1280px 720px, 100% 100%, 100% 100%;
  }

  /* Chão em grade synthwave: linhas convergindo para o horizonte */
  section::before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 340px;
    pointer-events: none;
    opacity: 0.32;
    background-image: var(--floor);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
  }

  /* Camada CRT por cima de tudo: scanlines + leve franja RGB + vinheta.
     Também carrega o número da página. */
  section::after {
    content: '';
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 72px 26px;
    pointer-events: none;
    font-family: 'DM Mono', monospace;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: var(--yellow);
    text-shadow: 0 0 10px rgba(250, 204, 21, 0.7);
    background-color: transparent;
    background-image:
      radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.5) 100%),
      linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.12) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.035), rgba(0, 255, 0, 0.015), rgba(0, 0, 255, 0.035));
    background-size: 100% 100%, 100% 4px, 6px 100%;
  }
  section[data-marpit-pagination]::after {
    content: attr(data-marpit-pagination) ' / ' attr(data-marpit-pagination-total);
  }

  /* Os <br> soltos do conteúdo viram espaçamento controlado pelas margens */
  section > br { display: none; }

  /* ── Títulos ── */
  section h1, section h2, section h3, section h4 {
    font-family: 'Syne', 'DM Sans', 'Helvetica Neue', Arial, sans-serif;
    color: #fff;
    letter-spacing: -0.03em;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }

  section h1 {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.02;
  }

  section h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 30px;
    text-shadow: 2px 2px 0 rgba(109, 40, 217, 0.9);
  }
  section h2::after {
    content: '';
    display: block;
    width: 64px;
    height: 6px;
    margin-top: 16px;
    background: var(--yellow);
    box-shadow: 0 0 14px rgba(250, 204, 21, 0.7);
  }

  section h3 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.25;
    color: var(--sky-2);
    margin: 1.1em 0 0.35em;
  }
  section h2 + h3 { margin-top: 0; }

  /* ── Texto ── */
  section p {
    margin: 0 0 0.7em;
    font-size: 23px;
    line-height: 1.6;
    color: var(--text);
  }

  /* Medida de linha confortável nos slides de texto */
  section > p, section > ul, section > ol, section > blockquote { max-width: 980px; }

  /* Destaque: marca-texto neon */
  section strong {
    font-weight: 700;
    color: #fff;
    background: linear-gradient(transparent 58%, rgba(250, 204, 21, 0.1) 58%);
    padding: 0 0.12em;
    margin: 0 -0.12em;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  section em {
    font-style: normal;
    font-weight: 600;
    color: var(--purple-2);
  }

  section a {
    color: var(--sky-2);
    text-decoration: underline;
    text-decoration-color: var(--yellow);
    text-decoration-thickness: 3px;
    text-underline-offset: 4px;
  }
  section a .tag { text-decoration: none; }

  section img {
    background: none;
    vertical-align: middle;
    max-width: 100%;
  }

  /* ── Listas: nós quadrados de pixel ── */
  section ul, section ol {
    list-style: none;
    margin: 0.1em 0 0.6em;
    padding: 0;
  }
  section li {
    position: relative;
    padding: 0.2em 0 0.2em 1.6em;
    font-size: 22px;
    line-height: 1.5;
    color: var(--text);
  }
  section ul > li::before {
    content: '';
    position: absolute;
    left: 0.15em;
    top: 0.85em;
    width: 0.44em;
    height: 0.44em;
    background: var(--yellow);
    box-shadow: 0 0 8px rgba(250, 204, 21, 0.75);
  }
  section li > p { margin: 0 0 0.3em; }
  section li > p:last-child { margin-bottom: 0; }
  section li + li { margin-top: 0; }
  section ul ul { margin: 0.1em 0; }
  section ul ul > li::before {
    background: transparent;
    border: 2px solid var(--sky);
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
    width: 0.36em;
    height: 0.36em;
  }
  section ol { counter-reset: item; }
  section ol > li { counter-increment: item; }
  section ol > li::before {
    content: counter(item, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 0.42em;
    font-family: 'DM Mono', monospace;
    font-size: 0.72em;
    font-weight: 500;
    color: var(--yellow);
  }

  /* ── Código ── */
  section code {
    font-family: 'DM Mono', ui-monospace, Menlo, Consolas, monospace;
    font-size: 0.82em;
    background: rgba(168, 85, 247, 0.22);
    color: #F5D0FE;
    border-radius: 3px;
    padding: 0.08em 0.4em;
  }
  section pre {
    display: block;
    margin: 0.6em 0;
    padding: 22px 28px;
    background: rgba(0, 0, 0, 0.82);
    border: 2px solid rgba(234, 179, 8, 0.75);
    border-radius: 0;
    box-shadow: 0 0 18px rgba(234, 179, 8, 0.25);
    font-size: 21px;
    line-height: 1.65;
    overflow: hidden;
  }
  section pre code {
    display: block;
    background: none;
    border-radius: 0;
    padding: 0;
    font-size: 1em;
    color: #E6ECFF;
  }
  section pre code .hljs-keyword,
  section pre code .hljs-selector-tag,
  section pre code .hljs-literal { color: var(--yellow); }
  section pre code .hljs-title,
  section pre code .hljs-function,
  section pre code .hljs-section,
  section pre code .hljs-name { color: #7FD4FF; }
  section pre code .hljs-title.class_,
  section pre code .hljs-type,
  section pre code .hljs-built_in { color: #86EFAC; }
  section pre code .hljs-string,
  section pre code .hljs-symbol,
  section pre code .hljs-addition { color: #FDBA74; }
  section pre code .hljs-number,
  section pre code .hljs-attr,
  section pre code .hljs-variable,
  section pre code .hljs-params,
  section pre code .hljs-meta { color: var(--pink); }
  section pre code .hljs-comment,
  section pre code .hljs-quote { color: #7C8AA5; font-style: italic; }

  section hr {
    border: 0;
    width: 64px;
    height: 4px;
    margin: 1em 0;
    background: var(--yellow);
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.7);
  }

  /* ── Citação ── */
  section blockquote {
    margin: 0.8em 0;
    padding: 16px 24px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(234, 179, 8, 0.6);
    border-left: 8px solid var(--yellow);
    border-radius: 0;
    font-size: 21px;
    color: var(--text);
  }
  section blockquote p { margin: 0; font-size: 1em; }
  section blockquote strong { background: none; padding: 0; margin: 0; color: var(--yellow-2); }

  /* ── Tabelas de conteúdo ── */
  section table:not(.cols) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 19px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(234, 179, 8, 0.8);
    border-radius: 0;
    box-shadow: 0 0 16px rgba(234, 179, 8, 0.25);
  }
  section table:not(.cols) tr { background: none; }
  section table:not(.cols) th {
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    color: #0B0B14;
    background: var(--yellow);
    border: 0;
  }
  section table:not(.cols) td {
    padding: 11px 16px;
    color: var(--text);
    background: transparent;
    border: 0;
    border-bottom: 1.5px dashed var(--line);
  }
  section table:not(.cols) tbody tr:nth-child(even) td { background: rgba(168, 85, 247, 0.10); }
  section table:not(.cols) tr:last-child td { border-bottom: 0; }
  .table-wrap { overflow: hidden; }

  /* ════════ SLIDES ESPECIAIS ════════ */

  /* Capa, divisores e encerramento: grade mais forte */
  section.hero,
  section.divider,
  section.closing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 64px 84px;
  }
  section.hero::before,
  section.divider::before,
  section.closing::before { opacity: 0.7; }

  /* Capa e encerramento: sem número de página (a camada CRT continua) */
  section.hero::after,
  section.closing::after { color: transparent; text-shadow: none; }

  section.hero h1,
  section.closing h1 {
    font-size: 125px;
    font-weight: 800;
    letter-spacing: -0.055em;
    line-height: 0.86;
    color: #fff;
    margin: 0 0 0.1em -6px;
    text-shadow:
      6px 6px 0 #7C3AED,
      12px 12px 0 #4C1D95,
      0 0 48px rgba(168, 85, 247, 0.6);
  }
  section.hero h2,
  section.closing h2 {
    max-width: 900px;
    margin: 0 0 0.5em;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: #fff;
    text-shadow: none;
  }
  section.hero h2::after,
  section.closing h2::after,
  section.divider h2::after { display: none; }

  section.hero p {
    max-width: 640px;
    margin: 0 0 0.4em;
    font-size: 22px;
    color: var(--text-2);
  }

  /* Selo de autoria: cartucho de fliperama */
  section.hero .subtitle {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 22px;
    font-family: 'DM Mono', monospace;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--yellow);
    background: rgba(0, 0, 0, 0.82);
    border: 2px solid rgba(234, 179, 8, 0.8);
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.5);
  }
  section.hero .subtitle::before { content: '★ '; }
  section.hero .subtitle::after  { content: ' ★'; }

  section.closing {
    align-items: center;
    text-align: center;
  }
  section.closing h1 { margin-left: 0; }
  section.closing h2 { margin-bottom: 0.3em; }

  /* Divisores de seção: grade ciano e selo de fase */
  section.divider { --floor: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 340' width='1280' height='340'%3E%3Cdefs%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='340'%3E%3Cstop offset='0' stop-color='%2322D3EE' stop-opacity='0'/%3E%3Cstop offset='.35' stop-color='%2322D3EE' stop-opacity='.7'/%3E%3Cstop offset='1' stop-color='%2322D3EE' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cline x1='640.0' y1='0' x2='-816.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-712.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-608.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-504.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-400.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-296.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-192.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-88.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='16.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='120.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='224.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='328.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='432.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='536.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='640.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='744.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='848.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='952.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1056.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1160.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1264.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1368.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1472.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1576.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1680.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1784.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1888.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='1992.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='2096.0' y2='340' stroke='url%28%23g%29' stroke-width='5' opacity='.22'/%3E%3Cline x1='640.0' y1='0' x2='-816.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-712.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-608.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-504.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-400.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-296.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-192.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='-88.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='16.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='120.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='224.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='328.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='432.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='536.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='640.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='744.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='848.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='952.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1056.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1160.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1264.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1368.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1472.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1576.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1680.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1784.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1888.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='1992.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='640.0' y1='0' x2='2096.0' y2='340' stroke='url%28%23g%29' stroke-width='1.6'/%3E%3Cline x1='0' y1='6.0' x2='1280' y2='6.0' stroke='%2322D3EE' stroke-width='4.4' opacity='0.08'/%3E%3Cline x1='0' y1='6.0' x2='1280' y2='6.0' stroke='%2322D3EE' stroke-width='1.2' opacity='0.35'/%3E%3Cline x1='0' y1='13.6' x2='1280' y2='13.6' stroke='%2322D3EE' stroke-width='4.6' opacity='0.09'/%3E%3Cline x1='0' y1='13.6' x2='1280' y2='13.6' stroke='%2322D3EE' stroke-width='1.3' opacity='0.40'/%3E%3Cline x1='0' y1='24.2' x2='1280' y2='24.2' stroke='%2322D3EE' stroke-width='4.8' opacity='0.10'/%3E%3Cline x1='0' y1='24.2' x2='1280' y2='24.2' stroke='%2322D3EE' stroke-width='1.4' opacity='0.45'/%3E%3Cline x1='0' y1='37.8' x2='1280' y2='37.8' stroke='%2322D3EE' stroke-width='5.0' opacity='0.11'/%3E%3Cline x1='0' y1='37.8' x2='1280' y2='37.8' stroke='%2322D3EE' stroke-width='1.5' opacity='0.50'/%3E%3Cline x1='0' y1='54.4' x2='1280' y2='54.4' stroke='%2322D3EE' stroke-width='5.2' opacity='0.12'/%3E%3Cline x1='0' y1='54.4' x2='1280' y2='54.4' stroke='%2322D3EE' stroke-width='1.6' opacity='0.55'/%3E%3Cline x1='0' y1='74.0' x2='1280' y2='74.0' stroke='%2322D3EE' stroke-width='5.4' opacity='0.13'/%3E%3Cline x1='0' y1='74.0' x2='1280' y2='74.0' stroke='%2322D3EE' stroke-width='1.7' opacity='0.60'/%3E%3Cline x1='0' y1='96.7' x2='1280' y2='96.7' stroke='%2322D3EE' stroke-width='5.6' opacity='0.14'/%3E%3Cline x1='0' y1='96.7' x2='1280' y2='96.7' stroke='%2322D3EE' stroke-width='1.7' opacity='0.65'/%3E%3Cline x1='0' y1='122.4' x2='1280' y2='122.4' stroke='%2322D3EE' stroke-width='5.8' opacity='0.15'/%3E%3Cline x1='0' y1='122.4' x2='1280' y2='122.4' stroke='%2322D3EE' stroke-width='1.8' opacity='0.70'/%3E%3Cline x1='0' y1='151.1' x2='1280' y2='151.1' stroke='%2322D3EE' stroke-width='6.0' opacity='0.17'/%3E%3Cline x1='0' y1='151.1' x2='1280' y2='151.1' stroke='%2322D3EE' stroke-width='1.9' opacity='0.75'/%3E%3Cline x1='0' y1='182.8' x2='1280' y2='182.8' stroke='%2322D3EE' stroke-width='6.2' opacity='0.18'/%3E%3Cline x1='0' y1='182.8' x2='1280' y2='182.8' stroke='%2322D3EE' stroke-width='2.0' opacity='0.80'/%3E%3Cline x1='0' y1='217.6' x2='1280' y2='217.6' stroke='%2322D3EE' stroke-width='6.4' opacity='0.19'/%3E%3Cline x1='0' y1='217.6' x2='1280' y2='217.6' stroke='%2322D3EE' stroke-width='2.1' opacity='0.85'/%3E%3Cline x1='0' y1='255.4' x2='1280' y2='255.4' stroke='%2322D3EE' stroke-width='6.6' opacity='0.20'/%3E%3Cline x1='0' y1='255.4' x2='1280' y2='255.4' stroke='%2322D3EE' stroke-width='2.2' opacity='0.90'/%3E%3Cline x1='0' y1='296.2' x2='1280' y2='296.2' stroke='%2322D3EE' stroke-width='6.8' opacity='0.21'/%3E%3Cline x1='0' y1='296.2' x2='1280' y2='296.2' stroke='%2322D3EE' stroke-width='2.3' opacity='0.95'/%3E%3Cline x1='0' y1='340.0' x2='1280' y2='340.0' stroke='%2322D3EE' stroke-width='7.0' opacity='0.22'/%3E%3Cline x1='0' y1='340.0' x2='1280' y2='340.0' stroke='%2322D3EE' stroke-width='2.4' opacity='1.00'/%3E%3Crect x='0' y='0' width='1280' height='2' fill='%2322D3EE' opacity='.9'/%3E%3C/svg%3E"); }

  section.divider .label {
    align-self: flex-start;
    margin: 0 0 30px;
    padding: 6px 20px;
    font-family: 'DM Mono', monospace;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.2em;
    line-height: 1.4;
    text-transform: uppercase;
    color: var(--yellow);
    background: rgba(0, 0, 0, 0.85);
    border: 2px solid rgba(234, 179, 8, 0.8);
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.5);
  }
  section.divider .label::before { content: '★ '; }
  section.divider .label::after  { content: ' ★'; }

  section.divider h2 {
    max-width: 1080px;
    margin: 0;
    font-size: 60px;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.02;
    color: #fff;
    text-shadow: 5px 5px 0 #7C3AED, 0 0 36px rgba(56, 189, 248, 0.45);
  }
  section.divider p {
    max-width: 760px;
    margin: 28px 0 0;
    font-size: 24px;
    line-height: 1.5;
    color: var(--text-2);
  }

  /* ════════ COMPONENTES ════════ */

  /* Tags: selos de arcade */
  section .tag {
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 5px 16px;
    font-family: 'DM Mono', monospace;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.04em;
    color: var(--yellow);
    background: rgba(0, 0, 0, 0.82);
    border: 2px solid rgba(234, 179, 8, 0.8);
    border-radius: 0;
    box-shadow: 0 0 14px rgba(234, 179, 8, 0.45);
  }
  section .tag.green,
  section .tag.teal {
    color: var(--sky);
    border-color: rgba(56, 189, 248, 0.8);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.45);
  }
  section .tag.pink,
  section .tag.amber {
    color: var(--pink);
    border-color: rgba(217, 70, 239, 0.8);
    box-shadow: 0 0 14px rgba(217, 70, 239, 0.45);
  }

  /* Funcionalidades: menu de fliperama, separado por linhas tracejadas */
  section .feat {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    padding: 22px 0;
    border-bottom: 2px dashed var(--line);
  }
  section .feat:first-child { border-top: 2px dashed var(--line); }
  section .feat-icon {
    flex: 0 0 52px;
    width: 52px;
    height: 52px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.85);
    border: 2px solid rgba(234, 179, 8, 0.8);
    border-radius: 0;
    box-shadow: 0 0 14px rgba(234, 179, 8, 0.45);
  }
  section .feat-body h3 {
    margin: 0 0 6px;
    font-size: 22px;
    color: var(--yellow-2);
  }
  section .feat-body p {
    margin: 0;
    font-size: 19.5px;
    line-height: 1.5;
    color: var(--text-2);
  }

  /* Card de métrica */
  section .card {
    padding: 20px 24px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(216, 180, 254, 0.4);
    border-radius: 0;
  }
  section .card .num {
    font-family: 'Syne', sans-serif;
    margin-bottom: 6px;
    font-size: 46px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    color: var(--yellow);
    text-shadow: 0 0 14px rgba(250, 204, 21, 0.6);
  }
  section .card .label {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-2);
  }
  section .card p {
    margin: 6px 0 0;
    font-size: 16px;
    line-height: 1.45;
    color: var(--text-2);
  }

  /* Colunas de comparação */
  section table.cols,
  section table.cols tr,
  section table.cols td,
  section table.cols th {
    border: 0;
    background: transparent;
    padding: 0 12px;
    vertical-align: top;
  }

  section table.cols {
    display: table;
    width: 100%;
    max-width: 100%;
  }

  section .compare-col {
    padding: 20px 24px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(216, 180, 254, 0.4);
    border-radius: 0;
  }
  section .compare-col.hl {
    border-color: rgba(234, 179, 8, 0.8);
    box-shadow: 0 0 16px rgba(234, 179, 8, 0.35);
  }
  section .compare-col h3 {
    margin: 0 0 10px;
    padding-bottom: 10px;
    font-size: 22px;
    color: #fff;
    border-bottom: 2px dashed var(--line);
  }

  /* Cabeçalho e rodapé opcionais do Marp */
  section header, section footer {
    font-size: 14px;
    color: var(--text-2);
  }
  section.game-slide {
    display: flex;
  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
---

<!-- _class: hero -->



# Cyber


## <br>Projeto social voltado ao tópico de <i>Fake News</i> e desinformação

<p>Dinâmica colaborativa por meio de um jogo interativo e didático sobre o assunto para a promoção da Cidadania Digital.</p>
<!-- <p>Consiste na aplicação de uma dinâmica colaborativa por meio de um jogo interativo e didático sobre o assunto.</p> -->

<div style="margin-top:1.4em">
  <span class="tag">Projeto de extensão: Bytes para Cidadania</span>
  <span class="tag green">Projeto: Cyber</span>
  <span class="tag pink">Jogo interativo virtual</span>
  <!-- <span class="tag">Modo Multiplayer</span> -->
</div>
<br>
<!-- <div class="subtitle">Davi Santos de Mesquita</div> -->

---

## Equipe:

- Davi Santos de Mesquita
- José Ray Rodrigues Nascimento
- Lucas Vinicius David Martins
- Matheus Zaino Pinto Oliveira
- Pedro Antônio Vieira Sousa
- Pedro Ryan Coelho do Nascimento

---


## Tópicos da apresentação


- Contextualização
- Objetivos
- Fundamentação teórica
- Metodologia
- Cronograma
- Resultados esperados
- Protótipo do jogo

---

<!-- _class: divider -->

<div class="label">01</div>

## Contextualização

<p>Explanação da ação proposta e de como ela pode promover Cidadania Digital, evidenciando sua relevância.</p>

---

## Cidadania Digital

<p><strong>A dinâmica de consumo</strong> e da propagação de informação rápida e
acessível <strong>trouxe consigo alguns problemas para a sociedade, especialmente para
os mais jovens</strong>.</p>

<p> Envolta desta problemática, é evidente que <strong>a população carece de
conhecimentos de como lidar de modo ético e responsável com esse novo
ambiente</strong>. </p>

<p> <br> <strong>Para mitigar isso</strong>, a promoção da <strong>Cidadania Digital é de extrema importância</strong>, principalmente para a parcela da população que ainda está em processo de
desenvolvimento psicossocial – os mais jovens.</p>


<p> <br> <strong>Mas, o que é Cidadania Digital?</strong></p>

---


## Cidadania Digital
<br>

<p> A <strong>Cidadania Digital</strong> pode ser entendida como o
<strong>conjunto de direitos, deveres e comportamentos</strong> que o cidadão deve ter ao participar
do ambiente digital.</p>

<p> Nesse aspecto, o <strong>exercício da cidadania digital</strong> pode ser
atribuído a diversos pontos, como: </p>

- Utilizar a tecnologia de modo responsável;
- Compreender sobre segurança e privacidade no ambiente virtual;
- Saber diferenciar informações falsas de verdadeiras no âmbito virtual.

<p><br><strong>Qual a ação proposta para contribuir com a Cidadania Digital?</strong></p>

---

## Ação proposta
<br>

<p> Nesse prisma, notando a relevância da abordagem do tópico de <strong><i>fake news</i></strong> e
<strong>desinformação</strong> para a devida promoção da <strong>cidadania digital</strong>, <strong>a ação proposta</strong> para
promoção do tópico <strong>se delimita à dinâmica de um jogo digital com os alunos</strong>.</p>

<!-- <p> <strong>Detalhes</strong> sobre a ação:</p> -->

- O jogo proposto possuirá um enredo repleto de situações onde as <i>fake news</i> e a desinformação estarão presentes.
- O jogo atuará como uma ferramenta de aprendizagem prática e interativa;
- Os alunos serão apresentados a situações semelhantes às que
podem encontrar no cotidiano, devendo tomar decisões que influenciarão o
desenvolvimento da narrativa;
- A partir dessas escolhas, será possível discutir as
consequências de determinadas atitudes e apresentar maneiras mais seguras e
responsáveis de agir no ambiente digital.

---

## Ação proposta

<p> Por meio da ação proposta, busca-se expressar conhecimentos corretos e adequados do que deve ser feito nas problemáticas digitais citadas, de modo a <strong>promover</strong> a <strong>Cidadania Digital</strong> nas escolas, especialmente ao público do <strong>Ensino Fundamental II</strong>.</p>

---

<!-- _class: divider -->

<div class="label">02</div>

## Objetivos

<p>Qual é o objetivo geral e quais são os objetivos específicos atrelados ao projeto Cyber?</p>

---

## Objetivo geral

O objetivo geral do projeto é **promover a Cidadania Digital entre alunos do Ensino Fundamental II por meio da aplicação de um jogo digital interativo**, incentivando-os a combater fake news, desinformação e o mau uso das redes sociais através do pensamento crítico e da tomada de decisão colaborativa.

---

## Objetivos específicos

- Compreender de modo mais detalhado os aspectos atrelados ao conceito de fake news e desinformação, bem como a forma que os mesmos se relacionam com o tema de Cidadania Digital.
- Definir o enredo do jogo digital, adaptando o contexto e a linguagem utilizada para o público juvenil.
- Codificar o jogo digital, seguindo o que foi definido, visando alcançar uma estética de RPG.
- Aplicar a dinâmica com o jogo digital nas escolas, instruindo os alunos na tomada de decisão em situações que envolvem a problemática dentro do contexto do jogo, mas analogamente ao mundo real.
- Ensinar aos alunos, utilizando das opções de escolha disponíveis no jogo, como se deve agir, de modo ético e responsável, para lidar adequadamente com a problemática e combater a propagação de fake news e desinformação na vida real.
---

## Objetivos específicos

- **Aplicar um formulário** para os alunos **com a finalidade de obter um feedback acerca da ação efetuada**, de modo a **entender o quanto os alunos compreenderam sobre o tema**, bem **como poderíamos melhorar a dinâmica e o jogo**, coletando dados que poderão ser úteis para a elaboração de melhores metodologias e dinâmicas voltadas a esse público-alvo no futuro.

---

<!-- _class: divider -->

<div class="label">03</div>

## Fundamentação

<p>Explicação dos conceitos de Cidadania Digital, Fake News e desinformação</p>

---

## Cidadania digital

<table class="cols">
<tr>

<td width="60%" style="text-align:left;">

- Direitos e responsabilidades
- Uso consciente da tecnologia
- Discernimento e pensamento crítico
- Educação digital e midiática
- Papel social nos meios digitais

</td>

<td width="40%" style="text-align:right;padding-right:0;">

<img src="./assets/cidadania-digital.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

</td>
</tr>
</table>

---

## Fake News

<table class="cols">
<tr>

<td width="30%" style="text-align:left;">

- Informações falsas
- Redes sociais
- Engajamento
- Falta de verificação
- Popularização do termo
- "Desordem Informacional"

</td>

<td width="70%" style="text-align:right;padding-right:0;">

<img src="./assets/fake-news-o-que-e.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

</td>
</tr>
</table>

---

## Fake News


<table class="cols">
<tr>
<td width="63.4%">

<img src="./assets/youre-fake-news.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

<br>

</td>
<td width="36.6%">

<img src="./assets/fake-news.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

</td>
</tr>
</table>

---

## Tipos de desordem informacional



<table class="cols">
<tr>
<td width="30%">

- Misinformation
- Malinformation
- Disinformation

<br>

</td>
<td width="70%">

<img src="./assets/desinformacao.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

</td>
</tr>
</table>


---

## Cidadania Digital no combate às Fake News

<table class="cols">
<tr>
<td width="30%">

- Pensamento crítico
- Verificação
- Educação midiática
- Responsabilidade
- Consciência digital

<br>

</td>
<td width="70%">

<img src="./assets/lupa.jpeg" style="width:100%;height:520px;object-fit:cover;border-radius:12px;">

</td>
</tr>
</table>

---

<!-- _class: divider -->

<div class="label">04</div>

## Metodologia

<p>Descrição das etapas que fazem parte da composição do projeto.</p>

---

## Etapa 1

A <strong>primeira etapa</strong> consiste na realização de uma <strong>pesquisa bibliográfica</strong> em fontes confiáveis <strong>sobre Cidadania Digital</strong>, <strong><i>fake news</i></strong>, <strong>desinformação</strong> e o **uso das redes sociais por crianças e adolescentes**.


<p> Nessa pesquisa, serão buscadas:</p>

- Informações que permitam compreender o que caracteriza uma informação falsa ou enganosa;
- Como esse tipo de conteúdo pode ser disseminado na Internet;
- Quais dificuldades os jovens podem encontrar ao avaliar a veracidade de uma informação e quais atitudes podem ser tomadas para evitar sua propagação.


<br> **As informações encontradas servirão como base para a elaboração do conteúdo apresentado no jogo**.

---

## Etapa 2

Com base nas informações obtidas durante a pesquisa, **serão selecionados os principais conhecimentos que deverão ser trabalhados com os alunos**. 

Serão definidos, principalmente, exemplos de:

- Situações envolvendo fake news e desinformação;
- Formas de verificar uma informação antes de compartilhá-la; 
- Atitudes que contribuem para um uso mais responsável das redes sociais.

<br> **O conteúdo será adaptado para uma linguagem adequada aos estudantes do Ensino Fundamental II, buscando apresentar situações que façam parte ou sejam próximas de sua realidade**.

---

## Etapa 3

A terceira etapa será destinada ao **planejamento e desenvolvimento do jogo digital**. 

Nessa etapa será definida:

- A narrativa;
- Os personagens;
- As situações apresentadas;
- As opções de decisão disponíveis para os participantes.

<br> **Nesta etapa, planeja-se utilizar ferramentas de inteligência artificial para auxiliar no processo de desenvolvimento e codificação do jogo digital web**.

---

## Etapa 3

Considera-se, inicialmente, o provável uso das seguintes **tecnologias** para a construção do jogo:

- React 19
- Vite 6
- Tailwind CSS v4
- Lucide React
- Canvas Confetti
- DiceBear
- Web Audio API

---

## Etapa 4

Na quarta etapa **será realizada a aplicação do jogo com os estudantes**. A atividade **terá duração aproximada de uma hora** e **será conduzida pela equipe responsável pelo projeto**.

Os participantes serão apresentados à narrativa e convidados a tomar decisões de maneira colaborativa diante das situações apresentadas. 

Durante a atividade, serão realizadas explicações e discussões sobre as escolhas feitas, relacionando os acontecimentos do jogo com situações que podem ocorrer no cotidiano digital dos alunos.

---

## Etapa 5

Na quinta etapa, **será realizada uma avaliação da ação, buscando verificar a compreensão dos estudantes sobre os conteúdos apresentados**.

Nesta etapa, o feedback será obtido por meio da aplicação de um **questionário impresso ao fim da dinâmica**, mas também poderá ser obtido virtualmente no preenchimento de um formulário digital **ao finalizar o jogo**.

---


<!-- _class: divider -->

<div class="label">05</div>

## Cronograma

<p>Disposição das etapas ao longo das semanas destinadas ao projeto.</p>

---

<br><br><br>

| Etapa | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | 
|---|---|---|---|---|---|---|---|---|---|
| 1 | x |   |   |   |   |   |   |   |   | 
| 2 | x | x | x | x |   |   |   |   |   | 
| 3 | x | x | x | x |   |   |   |   |   | 
| 4 |   |   |   |   | x | x | x | x | x | 
| 5 |   |   |   |   | x | x | x | x | x | 

---

<!-- _class: divider -->

<div class="label">06</div>

## Resultados esperados e avaliação

<p></p>

---

## Expectativa

Ao fim da aplicação do projeto, **espera-se que os participantes sejam capazes de**:

- Reconhecer situações de desinformação presentes no cotidiano digital
- Refletir antes de compartilhar conteúdos e compreender a importância de verificar a veracidade das informações antes de repassá-las para outras pessoas


<br> Além disso, espera-se estimular:

- O pensamento crítico;
- A responsabilidade;
- A ética;
- O respeito no ambiente digital.


---

## Avaliação

Será aplicado um breve questionário após a atividade, buscando identificar se a ação reverberou em maior conhecimento dos participantes sobre o assunto abordado.

Entre os aspectos que podem ser avaliados nesse contexto, destacam-se:

- Capacidade de identificar informações potencialmente falsas ou enganosas;
- Compreensão da importância de verificar uma informação antes de compartilhá-la;
- Reconhecimento de atitudes responsáveis no uso das redes sociais;
- Capacidade de analisar as consequências das próprias decisões no ambiente digital;
- Participação e colaboração durante o desenvolvimento do enredo do jogo;
- Compreensão dos princípios básicos da Cidadania Digital.

---

## Sobre o jogo

Espera-se que:

- Cumpra o papel didático proposto;
- Seja hospedado em algum domínio, possuindo uma URL para acesso;
- Seu código-fonte seja público;
- Seja divulgado nas redes sociais (ex.: Instagram).

---

<!-- _class: divider -->

<div class="label">07 - Protótipo</div>

## Jogo Digital Interativo

<p> Um esboço do jogo proposto.</p>


---
<!-- _class: game-slide -->
<!-- <iframe src="http://localhost:5173" style="width: 100%; height: 100%; border: none; display: block;"></iframe> -->
<iframe src="./game/dist/" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
---