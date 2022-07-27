import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostingCard from './PostingCard';
import { useDispatch, useSelector } from 'react-redux';
import { postingActions, fetchPostingsFirst, fetchPersonalPostingsFirst, fetchBookmarkPostingsFirst } from '../../redux/module/postingReducer';

const PostingViewer = ({ isPersonal, target }) => {
    const dispatch = useDispatch();
    const postingData = useSelector(state => state.posting.postings);

    useEffect(()=> {
        if(target === 'main') {
            dispatch(fetchPostingsFirst());
        }
        else if(target === 'mypage') {
            dispatch(fetchPersonalPostingsFirst());
        }
        else if(target === 'bookmark') {
            dispatch(fetchBookmarkPostingsFirst());
        }
    }, [target])

    // useEffect(()=> {
    //     console.log(postingData);
    // }, [postingData])

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