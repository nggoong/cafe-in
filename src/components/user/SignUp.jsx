import React from 'react';
import styled from 'styled-components';

const SignUp = () => {

    const email_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const nickname_ref = React.useRef(null);

    const submitJoin = () => {
        const user_data = {
            email : email_ref.current.value,
            nickname : nickname_ref.current.value,
            password : pw_ref.current.value
        }

        if (email_ref.current.value === '') {
            alert ('아이디를 입력하세요!')
        } else if (nickname_ref.current.value === '') {
            alert ('닉네임을 입력하세요!')
        } else if (pw_ref.current.value === '') {
            alert ('비밀번호를 입력하세요!')
        }

        console.log(user_data)

        //아이디 형식이 맞지 않을 경우 :
        //닉네임 형식이 맞지 않을 경우??
        //비밀번호 형식이 맞지 않을 경우
        //비밀번호&&비밀번호 확인 input이 같지 않으면?
        //회원가입 성공시-> 서버로 보내고 알럿띄우고 login 페이지로 이동
    }

    return (
        <SingupWrapper>
            <h2>Join</h2>
            <SignupBox>
            <p>아이디</p><input ref={email_ref} placeholder="아이디를 입력하세요"/>< br/>
            <p>닉네임</p><input ref={nickname_ref} placeholder="닉네임을 입력하세요"/>< br/>
            <p>비밀번호</p><input ref={pw_ref} type="password" placeholder="비밀번호를 입력하세요"/>< br/>
            <p>비밀번호 확인</p><input type="password" placeholder="비밀번호를 다시 입력하세요"/>< br/>
            <button onClick={submitJoin}>회원가입</button>
            </SignupBox>
        </SingupWrapper>
    )
}

export default SignUp;

const SingupWrapper =styled.div`
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

const SignupBox =styled.div`

    margin-top : 15px;


    p {
        text-align: left;
        font-size : small;
        font-weight : bold;
    }

    input {
        padding: 15px;
        padding-bottom : 8px;
        margin-bottom : 20px;
        margin-top : 5px;
        border : none;
        border-bottom : 1px solid;
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