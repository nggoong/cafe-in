import React from 'react';
import styled from 'styled-components';
import intro from '../image/intro.jpg';
import { Link } from "react-router-dom";

const Intro = () => {


    return (
        <IntroWrapper>

                <Titlearea>
                    <h1>카페<span>In</span></h1>
                    <hr />
                </Titlearea>
                <Bodyarea>
                    <img src={intro} alt="intro" />
                    <p> 어떤 것이든 좋아요! <br /> 당신만의 비밀 레시피를 알려주세요! </p>
                <Arrow><p>↓</p></Arrow><br />
                <Link to='/login'><button>login</button></Link>
                </Bodyarea>

        </IntroWrapper>
    )
}

export default Intro;


const IntroWrapper =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align : center;
    justify-content: center;

    width: 100%;
    height: 80vh;
    background-color : #FEFEFE;

    button {
    background-color : #555;
    color : #FEFEFE;
    margin-top : 15px;
    border : none;
    padding : 15px;
    width : 120px;
    font-size : 15px;
    border-radius : 3px;

    :active {
        transform : translateY(6px);
    }


`

const Titlearea =styled.div`
    h1 {
        color : #555;
        font-size : 3rem;
        margin-bottom : 30px;

    }

    span {
        color : #8AAAE5;
        -webkit-animation:blink 1s ease-in-out infinite alternate;
        -moz-animation:blink 1s ease-in-out infinite alternate;
        animation:blink 1s ease-in-out infinite alternate;

        -webkit-keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
        }
        @-moz-keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
        }
        @keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
    }

    hr {
        width : 250px;
        border : 2px solid #979ba1;
    }
`

const Bodyarea =styled.div`
    img{
        width: auto;
        height:200px;

        animation: vibration .1s infinite;

        @keyframes vibration {
            from {
              transform: rotate(1deg);
            }
            to {
              transform: rotate(-1deg);
            }
          }

    }
    p {
        margin : 15px;
        font-size : 12px;
        font-weight : bold;
    }

`

const Arrow = styled.div`
p {
    font-size: 30px;
}
`