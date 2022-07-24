import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsFillCameraFill } from 'react-icons/bs';

const PostingInput = () => {
    const textAreaRef = useRef(null);
    const imageDivRef = useRef(null);
    const [imageState, setImageState] = useState(null);
    const [cafeState, setCafeState] = useState(null);
    const navigate = useNavigate();

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

    const selectCafeName = (e) => {
        setCafeState(e.target.value);
    }

    


    return (
        <InputWrapper>
            <PostingImageDiv>
                <h2>No Image</h2>
                <PostingImageRender ref={imageDivRef}/>
            </PostingImageDiv>
            <InputsArea>
                <ImageInputLabel htmlFor="image-file">
                    <p><BsFillCameraFill/>이미지 업로드</p>
                </ImageInputLabel>
                <input type="file" onChange={setThumbnail} 
                name="file" id="image-file" style={{display:'none'}}></input>
                <select name="cafe" onChange={selectCafeName}>
                    <option value="">카페선택</option>
                    <option value="스타벅스">스타벅스</option>
                    <option value="탐앤탐스">탐앤탐스</option>
                    <option value="투썸플레이스">투썸플레이스</option>
                    <option value="이디야">이디야</option>
                    <option value="할리스">할리스</option>
                    <option value="파스쿠찌">파스쿠찌</option>
                </select>
                <textarea placeholder='내용을 입력해주세요' name="postingText"
                ref={textAreaRef}></textarea>
                
            </InputsArea>
            <ButtonArea>
                <Button color="primary" onClick={()=>alert(`${textAreaRef.current.value}`)}>확인</Button>
                <Button color="error" onClick={()=> navigate(-1)}>취소</Button>
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
    position:relative;
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
`

const PostingImageRender = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:10px;
    background-size:100% 35vh;
    background-position:center;
`

const ImageInputLabel = styled.label`
    padding: 6px 25px;
    background-color:rgb(36, 114, 209);
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-bottom:5px;
    
    p {
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
    }
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

    select {
        height:30px;
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