import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../image/logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    //로고 눌러서 다른 페이지 이동시 헤더 노출 현상 방지 위해 Link에서 navigate로 변경

    if (window.location.pathname === '/')  return null;
    if (window.location.pathname === '/login')  return null;
    if (window.location.pathname === '/signup')  return null;

    return (
        <HeaderWrapper>
            <HeaderContents>
            <Logoarea onClick={() => {
                        navigate("/main");
                    }}>
                    <img src={logo} alt="intro" /><h1>카페In</h1>
                </Logoarea>
                <Actionsarea><div className='user-info-div'><FaUserCircle/><span>nickname</span></div></Actionsarea>
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
    // border-bottom:2px solid lightgray;
    border-bottom : 1px solid lightgray;

    background:#FEFEFE;
    
`

const HeaderContents = styled.div`
    display:flex;
    /* background:blue; */
    justify-content: space-between;
    width:95%;
    height:100%;
    max-width:800px;
    margin:0 auto;
    margin-top : 3px;

    .header-logo {
        flex:1;
    }
    h1 {
        margin:0;
        padding:0;
        color:#8AAAE5;
    }

`

const Logoarea = styled.div`
    display:flex;
    cursor: pointer;

`

const Actionsarea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-end;
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
`