import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const PostingInput = () => {
    const textAreaRef = useRef(null);
    const imageDivRef = useRef(null);
    const [imageState, setImageState] = useState(null);

    const setThumbnail = (e) => {
        let files = e.target.files;
        if(files && files[0]) {
            setImageState(files[0]);
        }
        let reader = new FileReader();
        
        reader.onload = (e) => {
            imageDivRef.current.setAttribute('style', `background-image:url(${e.target.result})`);
        }

        reader.readAsDataURL(files[0]);
    }

    


    return (
        <InputWrapper>
            <PostingImageDiv ref={imageDivRef}>
                <h2>No Image</h2>
            </PostingImageDiv>
            <InputsArea>
                <input type="file" onChange={setThumbnail} name="file"></input>
                <textarea placeholder='내용을 입력해주세요' name="postingText"
                ref={textAreaRef}></textarea>
            </InputsArea>
            <ButtonArea>
                <Button color="primary" onClick={()=>alert(`${textAreaRef.current.value}`)}>확인</Button>
                <Button color="error">취소</Button>
            </ButtonArea>
        </InputWrapper>
    )
}

export default PostingInput;

const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
    height:80vh;
    padding-top:30px;
    /* background:yellow; */
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
    user-select:none;
    background-size:100% 35vh;
    background-position:center;
    
`

const InputsArea = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;

    textarea {
        resize:none;
        height:20vh;
        border-radius:10px;
        padding:10px;
        font-size:20px;
    }
`
const ButtonArea = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    gap:20px;
`

const Button = styled.button`
    border-radius:10px;
    height:50px;
    width:100px;
    background:${props => props.color==="primary"? "rgb(36, 114, 209)":"rgb(230, 68, 53)"};
    color:white;
    cursor:pointer;
    font-weight:bold;
`