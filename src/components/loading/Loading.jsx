import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const Loading = () => {
    const is_loading = useSelector(state => state.loading.isLoading);
    return(
        <LoadingWrapper isShow={is_loading===false? false : true}>
            {/* <img src='/Spinner-0.6s-200px.gif'></img> */}
            <Spinner/>
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


const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  height: 3rem;
  width: 3rem;
  border: 5px solid #3563e9;
  border-radius: 50%;
  border-left: none;
  border-right: none;
  margin: 10rem auto;
  animation: ${rotation} 1s linear infinite;
`;