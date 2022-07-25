import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    if (window.location.pathname === '/')  return null;
    if (window.location.pathname === '/login')  return null;
    if (window.location.pathname === '/signup')  return null;

    return (
        <HeaderWrapper>
            <HeaderContents>
                <Link to="/" className='header-logo'><h1>logo</h1></Link>
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
    width:95%;
    height:100%;
    max-width:800px;
    margin:0 auto;
    .header-logo {
        flex:1;
    }
    h1 {
        margin:0;
        padding:0;
        color:#8AAAE5;
    }
    a {
        text-decoration:none;
    }
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