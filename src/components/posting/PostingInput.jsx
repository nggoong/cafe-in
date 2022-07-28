import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { storage } from '../../shared/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { BsFillCameraFill } from 'react-icons/bs';
import axios from 'axios';
import instance from '../../shared/axios';

const validation = (image, cafeName, text) => {
    if(!image || !cafeName || !text.current.value) return false;
    return true;
}

const PostingInput = ({ isEdit }) => {
    const textAreaRef = useRef(null);
    const imageDivRef = useRef(null);
    const cafeSelectRef = useRef(null);
    const [imageState, setImageState] = useState(null);
    const [cafeState, setCafeState] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    const setThumbnail = async (e) => {
        let files = e.target.files;
        
        if(files && files[0]) {
            const uploaded_file = await uploadBytes(ref(storage, `images/${files[0].name}`), files[0]);
            const file_url = await getDownloadURL(uploaded_file.ref);
            console.log(file_url);
            setImageState(file_url);
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

    const submitHandler = async (e) => {
        console.log(e.target)
        e.preventDefault();
        const isOkay = validation(imageState, cafeState, textAreaRef);
        if(!isOkay) {
            alert('폼을 다 채워주세요!');
            return;
        }
        let new_data = {
                cafeName:cafeState,
                content:textAreaRef.current.value,
                imageUrl:imageState
            }
        // 게시글 추가 기능
        if(!isEdit) {
            const uploaded_file = await uploadBytes(ref(storage, `images/${imageState.name}`), imageState);
            const file_url = await getDownloadURL(uploaded_file.ref);
            console.log(file_url);
            await instance.post('/api/post', new_data).catch((e) => console.log(e));
            navigate('/');
        }
        // 게시글 수정 기능
        else {
            await instance.put(`/api/post/${params.postingId}`, new_data);
            navigate('/mypage');

        }
        
        
        
        // const formData = new FormData();
        // formData.append("file", imageState);
    
        // const res =  await axios.post(`${process.env.REACT_APP_API_URL}/api/post/?cafeName=${cafeState}&content=${textAreaRef.current.value}`, formData, {
        //     headers:{"Content-Type": "multipart/form-data",
        // "Authorization":`${localStorage.getItem("Authorization")}`}
        // }).catch((e) => console.log(e));

        // console.log(res);
        // navigate('/main') // 로그인 기능 반영되고 난 뒤에는 /으로 연결하기

    }

    useEffect(()=> {
        if(isEdit) {
            const fetchOnePost = async () => {
                const postId = params.postingId;
                const res = await instance.get(`/api/post/${postId}`);
                const data = res.data;
                imageDivRef.current.style.backgroundImage = `url(${data.imageUrl})`;
                cafeSelectRef.current.value = data.cafeName;
                textAreaRef.current.value = data.content;
                setImageState(data.imageUrl);
                setCafeState(data.cafeName);
            }

            fetchOnePost().catch(console.error);
        }
        else return;
    }, [isEdit])


    


    return (
        <InputWrapper>
            <PostingImageDiv>
                <h2>No Image</h2>
                <PostingImageRender ref={imageDivRef}/>
            </PostingImageDiv>
            <InputsArea >
                <ImageInputLabel htmlFor="image-file">
                    <p><BsFillCameraFill/>이미지 업로드</p>
                </ImageInputLabel>
                <input type="file" accept='image/*' onChange={setThumbnail} 
                name="file" id="image-file" style={{display:'none'}}></input>
                <select name="cafe" onChange={selectCafeName} ref={cafeSelectRef}>
                    <option value="">☕카페선택</option>
                    <option value="스타벅스">스타벅스</option>
                    <option value="탐앤탐스">탐앤탐스</option>
                    <option value="투썸플레이스">투썸플레이스</option>
                    <option value="이디야">이디야</option>
                    <option value="할리스">할리스</option>
                    <option value="파스쿠찌">파스쿠찌</option>
                </select>
                <textarea placeholder='내용을 입력해주세요' name="postingText"
                ref={textAreaRef}></textarea>
                <ButtonArea>
                <Button color="error" onClick={() => navigate(-1)}>돌아가기</Button>
                <Button color="primary" type="submit" onClick={submitHandler}>등록하기</Button>
            </ButtonArea>
                
            </InputsArea>
            
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
    background: #FEFEFE;
    border : 1px solid black;
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
    background-color:#8AAAE5;
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
        font-size:15px;
    }

    select {
        height:35px;
        font-family: 'Noto Sans KR', sans-serif;
    }

    select option {
        font-size : 13px;
        font-family: 'Noto Sans KR', sans-serif;
    }

`
const ButtonArea = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    gap:4rem;
`

const Button = styled.button`
    border-radius:50px;
    height:70px;
    width:70px;
    color:${props => props.color==="primary"? "#8AAAE5;":"#555;"};
    border : none;
    background-color:white;
    cursor:pointer;
    font-size : 15px;

`