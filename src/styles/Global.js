import { createGlobalStyle } from 'styled-components';

import gilroyExtraBold from '../assets/fonts/gilroy-extrabold.otf';
import gilroyLight from '../assets/fonts/gilroy-light.otf';

const Global = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy Extra Bold';
        src: url('${gilroyExtraBold}') format('otf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy Light';
        src: url('${gilroyLight}') format('otf');
        font-weight: normal;
        font-style: normal;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    html {
        font-size: 62.5%
    }

    body {
        font-family: 'Gilroy Light', sans-serif;
    }
`;

export default Global;
