import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background:white;
    }
    p {
        margin:0;
        margin-top:5px;
    }
    h1 {
        margin:0;
        margin-top:5px;
    }
    h2 {
        margin:0;
        margin-top:5px;
        font-size : 35px;
    }
    * {
    font-family: 'GangwonEdu_OTFBoldA';
    }
`

export default GlobalStyle;