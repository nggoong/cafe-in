import React, { useState } from 'react';
import styled from 'styled-components';
import instance from '../../shared/axios';
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

    const axiostest = async() => {
        const res = await instance.post('/user/signup', []).catch((e)=> {
            console.log(e);
        })

        const data = res.data;
        return data;
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
            <PostingContent>
                <h2>스타벅스</h2>
                <p>아이스티에 샷 추가 들어보셨나요 진짜 맛있어요 이게 뭔가 했었는데 진짜 맛있더라구요,,,</p>
            </PostingContent>
            
            <PersonalArea personal={isPersonal}>
                <p className='delete-action' onClick={axiostest}>DELETE</p>
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
const PostingContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:5px;
    padding-left:8px;
    p {
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