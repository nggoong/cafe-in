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
    // * {
    // font-family: 'GangwonEdu_OTFBoldA';
    // }
    * { 
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }
`

export default GlobalStyle;