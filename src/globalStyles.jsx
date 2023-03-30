import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #181D26;
        color: white;
    }

    ::-webkit-scrollbar {
    width: 0px;
    }
`;

export default GlobalStyle;