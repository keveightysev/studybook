import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
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
        font-family: 'Raleway', sans-serif;
    }
`;

export default Global;
