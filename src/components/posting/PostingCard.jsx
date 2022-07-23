import React, { useState } from 'react';
import styled from 'styled-components';
import { BsBookmark, BsBookmarkFill, BsSuitHeart, BsFillSuitHeartFill } from 'react-icons/bs';

const PostingCard = ({ isPersonal }) => {
    const [bookmark, setBookmark] = useState(false);
    const [like, setLike] = useState(false);

    const toggleBookmark = () => {
        setBookmark((bookmark)=> !bookmark);
    }
    const toggleLike = () => {
        setLike((like) => !like);
    }

    return(
        <PostingCardWrapper>
            <PostingHeader>
                <h2>nickname</h2>
            </PostingHeader>
            <PostingImageDiv>
                <h2>No Image</h2>
            </PostingImageDiv>
            <ActionsArea personal={isPersonal}>
                <p onClick={toggleBookmark}>{!bookmark?<BsBookmark/>:<BsBookmarkFill style={{color:'yellow'}}/>}</p>
                <p onClick={toggleLike}>{!like?<BsSuitHeart/>:<BsFillSuitHeartFill style={{color:'red'}}/>}</p>
            </ActionsArea>
            <PersonalArea personal={isPersonal}>
                <p className='delete-action'>DELETE</p>
                <p className='edit-action'>EDIT</p>
            </PersonalArea>
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
const PostingHeader = styled.div`
    width:100%;
    padding:0 10px;
    h2 {
        font-size:17px;
    }
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
    display:${props => props.personal === false? 'flex':'none'};
    justify-content:flex-end;
    gap:20px;
    width:100%;
    font-size:35px;
    p {
        cursor:pointer;
    }
`
const PersonalArea = styled(ActionsArea)`
    display:${props => props.personal === true? 'flex':'none'};
    font-size:15px;
    font-weight:bold;
    .delete-action {
        color:red;
    }
    .edit-action {
        color:blue;
    }
    
`