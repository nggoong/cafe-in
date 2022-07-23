import React from 'react';
import styled from 'styled-components';
import { BsBookmark, BsBookmarkFill, BsSuitHeart, BsFillSuitHeartFill } from 'react-icons/bs';

const PostingCard = () => {

    return(
        <PostingCardWrapper>
            <PostingImageDiv>
                <h2>No Image</h2>
            </PostingImageDiv>
            <ActionsArea>
                <p><BsBookmark/></p>
                <p><BsSuitHeart/></p>
            </ActionsArea>
        </PostingCardWrapper>
    )
}

export default PostingCard;

const PostingCardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
    padding:20px;
    background:white;
    box-sizing:border-box;
    border-radius:10px;
    border:2px solid lightgray;
`
const PostingImageDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:gray;
    width:100%;
    height:35vh;
    background:blue;
    border-radius:10px;
    background:lightgray;
`

const ActionsArea = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:20px;
    width:100%;
    font-size:35px;
    cursor:pointer;
`