import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const Loading = () => {
    const is_loading = useSelector(state => state.loading.isLoading);
    return(
        <LoadingWrapper isShow={is_loading===false? false : true}>
            <LoadingImageDiv>
                <img src="/loading.png"></img>
            </LoadingImageDiv>
        </LoadingWrapper>
    )
}

export default Loading;

const LoadingWrapper = styled.div`
    display:${props => props.isShow === false? 'none':'flex'};
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(244,244, 244, 0.7);
    z-index:1000;
    
`

const opacityAnimation = keyframes`
    from {
        opacity:1
    }
    to {
        opacity:0.3;
    }
`;

const LoadingImageDiv = styled.div`
    width:200px;
    height:200px;
    img {
        height:100%;
        width:100%;
    }
    animation:${opacityAnimation} 1s linear alternate infinite;
`


