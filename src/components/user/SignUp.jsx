import React from 'react';
import styled from 'styled-components';

const SignUp = () => {

    return (
        <SingupWrapper>
            <h2>Join</h2>
            <SignupBox>
            <p>아이디</p><input placeholder="아이디를 입력하세요"/>< br/>
            <p>닉네임</p><input placeholder="닉네임을 입력하세요"/>< br/>
            <p>비밀번호</p><input type="password" placeholder="비밀번호를 입력하세요"/>< br/>
            <p>비밀번호 확인</p><input type="password" placeholder="비밀번호를 다시 입력하세요"/>< br/>
            <button>회원가입</button>
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
    margin-bottom : 50px;
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
    }

`