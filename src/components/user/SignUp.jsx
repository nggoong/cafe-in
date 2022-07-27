import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"; 
import { addUser } from '../../redux/module/userReducer';
import { useDispatch } from 'react-redux';

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //ref로 input값 받아오기
    const email_ref = React.useRef(null);
    const nickname_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const pwcheck_ref = React.useRef(null);

    //input값 제한 조건 충족에 따른 p태그 반환
    const [emailcheck, setEmailCheck] = useState(null);
    const [nicknamecheck, setNickNameCheck] = useState(null);
    const [pwcheck, setPwCheck] = useState(null);
    const [pwrecheck, setPwReCheck] = useState(null);

    //아이디(이메일) 제한 조건 : 이메일 형식
    const email_limit = (email) => {
        let _reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return _reg.test(email);
    };

    //아이디 형식이 맞지 않을 경우
    const idCheck = () => {
        if (!email_limit(email_ref.current.value)) {
            setEmailCheck(false);
        } else {
            setEmailCheck(true);
        }
    }


    // 닉네임 제한 조건 : 2자리 이상 5자리 이하 한글
    const nickname_limit = (nickname) => {
        let _reg = /^(?=.*[ㄱ-ㅎ가-힣])[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,5}$/;
        return _reg.test(nickname);
    };

    //닉네임 형식이 맞지 않을 경우
    const nickNameCheck = () => {
        if (!nickname_limit(nickname_ref.current.value)) {
            setNickNameCheck(false);
        } else {
            setNickNameCheck(true);
        }
    }

    // 비밀번호 제한 조건 : 8자리 이상 20자리 이하
    const password_limit = (password) => {
        let _reg = /^[0-9a-zA-Z!@#$%^&.*]{8,20}$/;
        return _reg.test(password);
    };

    //비밀번호 형식이 맞지 않을 경우
    const pwCheck = () => {
        if (!password_limit(pw_ref.current.value)) {
            setPwCheck(false);
        } else {
            setPwCheck(true);
        }
    }


    // 유저 비밀번호 확인 일치 체크
    const pwReCheck = () => {
        if (pw_ref.current.value !== pwcheck_ref.current.value) {
            setPwReCheck(false);
        } else {
            setPwReCheck(true);
        }
    }
   
    const submitJoin = () => {

        //input 값에 공란이 있으면 알럿 띄우기
        if (email_ref.current.value === '') {
            alert ('아이디를 입력하세요!')
        } else if (nickname_ref.current.value === '') {
            alert ('닉네임을 입력하세요!')
        } else if (pw_ref.current.value === '') {
            alert ('비밀번호를 입력하세요!')
        } else if (pwcheck_ref.current.value === '') {
            alert ('비밀번호를 다시 입력하세요!')
        }
        // console.log(user_data)

        //회원가입 성공시 db는 서버로 보내고 알럿띄우고 login 페이지로 이동
        if (emailcheck && nickNameCheck && pwcheck && pwrecheck === true) {

            //보내줄 데이터 모아서 변수에 담기!
            const user_data = {
                email : email_ref.current.value,
                nickname : nickname_ref.current.value,
                password : pw_ref.current.value,
            }
            //리덕스의 addUser 함수를 이용해서 
            dispatch(addUser({user_data : user_data}))

            alert('가입을 축하드려요!')
            navigate('/login');
        }

    }

    return (
        <SingupWrapper>
            <h2>Join</h2>
            <SignupBox>
            <p>아이디</p>
            <input
                placeholder="이메일 형식"
                ref={email_ref}
                onBlur={idCheck}
                />< br/>
            {(emailcheck == null) ? (<None />) : emailcheck? (<Success><p>사용 가능한 아이디입니다.</p></Success>)
                : (<Fail><p>이메일 형식으로 작성해주세요!</p></Fail>)}
            <p>닉네임</p>
            <input
                placeholder="2자리 이상 5자리 이하 한글"
                ref={nickname_ref}
                onBlur={nickNameCheck}
                />< br/>
            {(nicknamecheck == null) ? (<None />) : nicknamecheck? (<Success><p>사용 가능한 닉네임입니다.</p></Success>)
                : (<Fail><p>2자리 이상 5자리 이하 한글로 작성해주세요!</p></Fail>)}
            <p>비밀번호</p>
            <input 
                type="password"
                placeholder="영문 8-20자, 특수문자(!@#$%^&.*) 포함 "
                ref={pw_ref}
                onBlur={pwCheck}
                />< br/>
            {(pwcheck == null) ? (<None />) : pwcheck? (<Success><p>사용 가능한 비밀번호입니다.</p></Success>)
                : (<Fail><p>특수문자를 포함 영문(8-20자)으로 작성해주세요!</p></Fail>)}
            <p>비밀번호 확인</p>
            <input
                type="password"
                placeholder="비밀번호 확인"
                ref={pwcheck_ref}
                onBlur={pwReCheck}
                />< br/>
            {(pwrecheck == null) ? (<None />) : pwrecheck? (<Success><p></p></Success>)
                : (<Fail><p>입력하신 비밀번호와 다릅니다!</p></Fail>)}
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

`

const SignupBox =styled.div`

    margin-top : 15px;

    p {
        text-align: left;
        font-size : small;
        font-weight : bold;
        margin-top :10px;
    }

    input {
        padding: 15px;
        padding-bottom : 5px;
        margin-bottom : 0px;
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
            transform : translateY(3px);
            //모바일에서 버튼이 잘 안 눌리는 현상 때문에 움직이는 px을 줄였습니다.
            //제꺼에선 잘 넘어가는데 움직이는 px이 커서 렉이 걸리는 게 아닌가 싶습니다.
        }
    
    }

`

const None = styled.div `
    display : none;
    // display : ${(props) => (props.emailcheck == null) ? 'none' : props.emailcheck ? '' : ''}
`


const Fail = styled.div `
    p {
        margin-top : 5px;
        font-size : 12px;
        // font-weight : lighter;
        padding-bottom : 15px;
        padding-left : 10px;
    }
    color : #f21a1a;

    `

const Success = styled.div `
    p {
        margin-top : 5px;
        font-size : 12px;
        // font-weight : lighter;
        padding-bottom : 15px;
        padding-left : 10px;
    }
    color : #34b534;
    `