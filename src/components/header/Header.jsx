import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../image/logo.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import instance from '../../shared/axios';

const Header = () => {
    let localStorage = window.localStorage;
    const navigate = useNavigate();
    //로고 눌러서 다른 페이지 이동시 헤더 노출 현상 방지 위해 Link에서 navigate로 변경
    const userNickname = useSelector(state => state.user.nickname);
    const logoutHandler = async () => {
        const res = await instance.get(`/user/logout`);
        console.log(res.data);
    }

    if (window.location.pathname === '/' && !userNickname)  return null;
    if (window.location.pathname === '/login')  return null;
    if (window.location.pathname === '/signup')  return null;


    return (
        <HeaderWrapper>
            <HeaderContents>
            <Logoarea onClick={() => {
                        navigate("/");

                    }}>
                    <img src={logo} alt="intro" /><h1>CAFE-in</h1>
                </Logoarea>
                <Actionsarea onClick={logoutHandler}>
                    <div className='user-info-div'><FaUserCircle/>
                        <span>{userNickname}</span>
                    </div>
                    <button onClick={() => {
                        localStorage.removeItem("Authorization");
                        window.location.replace('/');
                    }}
                    >LOGOUT</button>
                </Actionsarea>
            </HeaderContents>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    border-bottom : 1px solid lightgray;
    background:#FEFEFE;
`

const HeaderContents = styled.div`
    display:flex;
    justify-content: space-between;
    width:95%;
    height:100%;
    max-width:500px;
    margin:0 auto;
    margin-top : 3px;

    .header-logo {
        flex:1;
    }
    h1 {
        margin:0;
        padding:0;
        color:#8AAAE5;
        font-family: 'JGaegujaengyi-Bold-KO';
    }

`

const Logoarea = styled.div`
    display:flex;
    cursor: pointer;
    h1 {
        margin-top : 11px;
    }

`

const Actionsarea = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size:18px;
    width:200px;
    height:100%;
    .user-info-div {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
        justify-content:center;
    }
    span {
        font-size:13px;
    }
    button {
        font-size:18px;
        margin-left : 30px;
        border : none;
        background-color : transparent;
        padding : 0;
        cursor:pointer;

        @media (min-width: 500px) {
            &:hover {
                color: #8AAAE5;
            }
          }
    }
`