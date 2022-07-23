import React from 'react';
import styled from 'styled-components';
import PostingCard from './PostingCard';

const PostingViewer = ({ isPersonal }) => {


    return(
        <PostingViewerWrapper>
            <PostingCard isPersonal={isPersonal}></PostingCard>
            <PostingCard isPersonal={isPersonal}></PostingCard>
            <PostingCard isPersonal={isPersonal}></PostingCard>
            <PostingCard isPersonal={isPersonal}></PostingCard>
        </PostingViewerWrapper>
    )
}

export default PostingViewer;

const PostingViewerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
    height:100px;
`