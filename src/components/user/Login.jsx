import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Login = () => {

    const email_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const submitLogin = () => {
        const login_data = {
            email : email_ref.current.value,
            password : pw_ref.current.value
        }
        console.log(login_data)

        if (email_ref.current.value === '') {
            alert ('아이디를 입력하세요!')
        } else if (pw_ref.current.value === '') {
            alert ('비밀번호를 입력하세요!')
        }

        

        //아이디 형식이 맞지 않을 경우 :
        //서버의 아이디와 일치하지 않을 경우 : 
        //서버의 비밀번호와 일치하지 않을 경우 :
        //로그인 성공시-> main 페이지로 이동
    }

    return (
        <LoginWrapper>
            <h2 className='title'>login</h2>
            <LoginBox>
                <input ref={email_ref} type='email' placeholder="아이디"/>< br/>
                <input ref={pw_ref} type="password" placeholder="비밀번호"/>< br/>
                <button onClick={submitLogin}> 로그인 </button>
            </LoginBox>

            <LinkBox>
            <Link to='/signup'>아직 <span>회원가입</span>을 안하셨다면?</Link>
            </LinkBox>
        </LoginWrapper>
    )
}

export default Login;

const LoginWrapper =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:white;

    // position:absolute;
    // z-index:100;
    // width:100vw;
    // height:100vh;
    // top:0;
    // left:0;
    
`

const LoginBox =styled.div`

    p {
        text-align: left;
    }

    input {
        padding: 15px;
        margin-bottom : 20px;
        margin-top : 5px;
        border : none;
        border-bottom : 1px solid;
        // border-radius : 3px;
        width: 250px;

        &:hover{  
            background-color : #EEE;
            color : black;
          }

        &:focus{
            outline : none;
        }

        ::placeholder{
            font-size : 12px;
        }
    }

    button {
        padding: 10px;
        width: 280px;
        margin-top : 25px;
        border : none;
        border-radius : 3px;
        background-color: #555;
        color : white;
        font-weight : bold;

        :active {
            transform : translateY(6px);
        }
    
    }

`

const LinkBox =styled.div`
    padding-top : 45px;

    a {
        color : black;
        text-decoration:none;
    }

    @media (min-width: 500px) {
        a:hover {
          color: black;
          font-weight : bold;
          text-decoration: none;
        }
      }

    @media only screen and (max-width: 600px) {
    span {
        font-weight: bold;
        text-decoration: underline;
    }
    }

`