import React from 'react';
import styled from 'styled-components';
import intro from '../image/intro.jpg';
import { Link } from "react-router-dom";

const Intro = () => {


    return (
        <IntroWrapper>

                <Titlearea>
                    <h1>카페<span>in</span></h1>
                    <hr />
                </Titlearea>
                <Bodyarea>
                    <img src={intro} alt="intro" />
                    <p>당신만의</p>
                    <p><span>비밀 레시피</span>를 알려주세요!</p>
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
    border : none;
    padding : 15px;
    padding-bottom : 12px;
    width : 120px;
    font-size : 15px;
    border-radius : 3px;
    cursor: pointer;

    :active {
        transform : translateY(3px);
    }


`

const Titlearea =styled.div`
    h1 {
        color : #555;
        font-size : 3.5rem;
        margin-top : 10px;
        font-family: 'JGaegujaengyi-Bold-KO';
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
        margin : 10px;
        font-size : 18px;
    }

    span {
        color : #3f51b5;
    }
`

const Arrow = styled.div`
p {
    font-size: 25px;
}
`