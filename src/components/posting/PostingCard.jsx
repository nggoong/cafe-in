import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill, BsSuitHeart, BsFillSuitHeartFill } from 'react-icons/bs';
import { deletePersonalPosting } from '../../redux/module/postingReducer';

const createAtcut = (created_at) => {
    return created_at.slice(0,10)
}


const PostingCard = ({ isPersonal, posting }) => {
    // 북마크 부분 백앤드에서 어떻게 줄지 모르니까 나중에 바꾸기 꼭.
    const [bookmark, setBookmark] = useState(()=>(posting.bookmark === true?true:false));
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleBookmark = () => {
        setBookmark((bookmark)=> !bookmark);
    }
    const toggleLike = () => {
        setLike((like) => !like);
    }


    const deleteHandler = async () => {
        await dispatch(deletePersonalPosting({id:posting.id}));
        window.location.replace('/mypage');
    }

    return(
        <PostingCardWrapper>
            <PostingHeader>
                <h2>{posting.nickName}</h2>
                <p>{createAtcut(posting.createdAt)}</p>
            </PostingHeader>
            <PostingImageDiv style={{backgroundImage:`url(${posting.imageUrl})`}}>
            </PostingImageDiv>
            <ActionsArea personal={isPersonal}>
                <p onClick={toggleBookmark}>{!bookmark?<BsBookmark/>:<BsBookmarkFill style={{color:'yellow'}}/>}</p>
                <p onClick={toggleLike}>{!like?<BsSuitHeart/>:<BsFillSuitHeartFill style={{color:'red'}}/>}</p>
            </ActionsArea>
            <PostingContent>
                <h2>{posting.cafeName}</h2>
                <p>{posting.content}</p>
            </PostingContent>
            
            <PersonalArea personal={isPersonal}>
                <p className='delete-action' onClick={deleteHandler}>DELETE</p>
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
    display:flex;
    padding-right:10px;
    padding-left:10px;
    justify-content:center;
    align-items: center;
    h2 {
        font-size:17px;
        flex:1;
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
    background-position:center;
    background-size:100% 35vh;
`
const PostingContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    padding-left:8px;
    padding-right:8px;

    p {
        display: block;
        width:100%;
        line-height:1.5;
    }
`
const ActionsArea = styled.div`
    display:${props => props.personal === false? 'flex':'none'};
    justify-content:flex-start;
    padding-left:8px;
    margin-bottom:-10px;
    gap:15px;
    width:100%;
    font-size:25px;
    p {
        cursor:pointer;
    }
`
const PersonalArea = styled(ActionsArea)`
    display:${props => props.personal === true? 'flex':'none'};
    justify-content:flex-end;
    font-size:15px;
    font-weight:bold;
    margin-bottom:1px;
    .delete-action {
        color:red;
    }
    .edit-action {
        color:blue;
    }
    
`