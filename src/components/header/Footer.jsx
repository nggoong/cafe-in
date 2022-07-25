import React from 'react';
import styled from 'styled-components';
import { BsPencil, BsBookmarks, BsInboxes } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {

    if (window.location.pathname === '/')  return null;
    if (window.location.pathname === '/login')  return null;
    if (window.location.pathname === '/signup')  return null;

    return (
        <FooterWrapper>
            <FooterContents>
                {/* 내가 쓴 글 보기 페이지로 이동하는 버튼 */}
                <Link to='/mypage'>
                        <BsInboxes />
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


//   BsFillPencilFill, BsBookmarksFill, BsInboxesFill
export default Footer;

const FooterWrapper = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    background:white;
    
    display:flex;
    z-index:10;
`

const FooterContents = styled.div`
    background: white;
    width:45vw;
    height:100%;
    max-width:800px;
    margin:0 auto;

    cursor: pointer;

    display : flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    font-size: 35px;
    a:active {
        transform : translateY(4px);
    }
    h1 {
        margin:0;
        padding:0;
    }

    a {
        color : black;
        // text-decoration:none;
    }

    @media only screen and (max-width: 600px) {
        width:70vw;
        font-size: 30px;

      }
    
    @media (min-width: 500px) {
        a:hover {
            color: #555;
        }


    }

`