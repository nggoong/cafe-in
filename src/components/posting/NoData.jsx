import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NoData = () => {
    const selector = useSelector(state => state.posting.postings);

    return(
        <NoDataWrapper isShow={!selector.length?true:false}>
            <h2>no data</h2>
        </NoDataWrapper>
    )
}

export default NoData;

const NoDataWrapper = styled.div`
    display:${props => props.isShow === false ? 'none':"block"};
    position:fixed;
    top:100;
    left:0;
    width:100vw;
    height:85%;
    display:flex;
    justify-content:center;
    align-items:center;
`