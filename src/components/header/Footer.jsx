import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsPencil, BsBookmarks, BsInboxes } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const Footer = () => {
    const wrapperRef = useRef(null);
    const location = useLocation();
    const userNickname = useSelector(state => state.user.nickname);

    if (window.location.pathname === '/' && !userNickname)  return null;
    if (window.location.pathname === '/login')  return null;
    else if (window.location.pathname === '/signup')  return null;

    

    else {
        return (
            <FooterWrapper ref={wrapperRef}>
                <FooterContents>
                    {/* 내가 쓴 글 보기 페이지로 이동하는 버튼 */}
                    <Link to='/mypage' >
                            <BsInboxes/>
                    </Link>
    
                    {/* 북마크 페이지로 이동하는 버튼 */}
                    <Link to='/bookmark'>
                            <BsBookmarks />
                    </Link>
    
                    {/* 글 작성 페이지로 이동하는 버튼 */}
                    <Link to='/posting/add'>
                            <BsPencil />
                    </Link>
    
    
                </FooterContents>
            </FooterWrapper>
        )
    }

    
}


//   BsFillPencilFill, BsBookmarksFill, BsInboxesFill
export default Footer;

const FooterWrapper = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    background:white;
    border-top : 1px solid lightgray;
    
    display:flex;
    z-index:10;
`

const FooterContents = styled.div`
    background: white;
    width:70vw;
    height:100%;
    max-width:500px;
    margin:0 auto;
    padding-top: 5px;

    cursor: pointer;

    display : flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    font-size: 35px;
    a:active {
        transform : translateY(4px);
    }
   
    a {
        color : #555;
    }

    @media only screen and (max-width: 600px) {
        width:70vw;
        font-size: 30px;

      }
    
    @media (min-width: 500px) {
        a:hover {
            color: #8AAAE5;
        }


    }

`