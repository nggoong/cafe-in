import React from 'react';
import styled from 'styled-components';
import PostingCard from './PostingCard';

const PostingViewer = () => {


    return(
        <PostingViewerWrapper>
            <PostingCard></PostingCard>
        </PostingViewerWrapper>
    )
}

export default PostingViewer;

const PostingViewerWrapper = styled.div`
    width:100%;
    height:100px;
`