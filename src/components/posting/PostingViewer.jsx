import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostingCard from './PostingCard';
import { useDispatch, useSelector } from 'react-redux';
import NoData from './NoData';
import { postingActions, fetchPostingsFirst, fetchPersonalPostingsFirst, fetchBookmarkPostingsFirst } from '../../redux/module/postingReducer';

const PostingViewer = ({ isPersonal, target }) => {
    const dispatch = useDispatch();
    const postingData = useSelector(state => state.posting.postings);

    useEffect(()=> {
        dispatch(fetchPostingsFirst({target:target}))
    }, [target])

    if(!postingData.length) {
        return <NoData></NoData>
    }

    return(
        <PostingViewerWrapper>
            {postingData.map((posting, index) => <PostingCard posting={posting} key={posting.id} isPersonal={isPersonal}/>)}
        </PostingViewerWrapper>
    )
}

export default PostingViewer;

const PostingViewerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
    margin-bottom:60px;
`