import {createGlobalStyle} from "styled-components";
import "./vendor/normalize.css";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 66.5%;
    --content-text: rgba(8, 21, 35, 1);
    --hero-eyebrow-text: rgba(1, 253, 171, 1);
    --hero-paragraph-text: rgba(255, 255, 255, 1);
    --hero-title-text: rgba(255, 255, 255, 1);
    --white-panel-eyebrow-text: rgba(2, 98, 240, 1);
    --content-eyebrow-text: var(--white-panel-eyebrow-text);
    --menu-footer-background-color: rgba(1, 2, 3, 1);
    --hero-background-gradient-first: rgba(9, 21, 35, 1);
    --hero-background-gradient-last: rgba(14, 37, 63, 1);
    --hero-background: linear-gradient(-180deg, var(--hero-background-gradient-first), var(--hero-background-gradient-last));
    --prefooter-background: linear-gradient(130deg, rgba(255,255,255,0) 50%, rgba(14,37,63,1) 100%);
    --hero-title-font-size: 6rem;
    --content-title-font-size: 4.2rem;
  }

  @font-face {
    font-family: 'Cousine';
    src: url('/fonts/Cousine-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-smooth: always;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-smooth: always;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-smooth: always;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-smooth: always;
    text-rendering: optimizeLegibility;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
