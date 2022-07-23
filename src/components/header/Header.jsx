import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <HeaderWrapper>
            <HeaderContents>
                <h1>logo</h1>

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
    background:green;
`

const HeaderContents = styled.div`
    background:blue;
    width:100%;
    height:100%;
    max-width:1000px;
    margin:0 auto;
    h1 {
        margin:0;
        padding:0;
    }
`