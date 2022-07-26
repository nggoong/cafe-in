# cafe-in
![image](https://user-images.githubusercontent.com/78852661/190915067-9ef4f7b7-a380-498d-8f84-deaf3104b7c8.png)


## 카페의 커피 커스텀 메뉴 추천 어플리케이션(프론트엔드)

나만의 카페 커스텀 메뉴/레시피를 공유해보세요! 마음에 드는 다른 레시피도 북마크 할 수 있어요!☕

## backend github

https://github.com/fox9d/Cafe-in

## 구현 내용

### 1. 회원가입 및 로그인

* JWT를 이용한 토큰 기반 인증 구현
* axios interceptors를 사용하여 API 요청의 headers에 토큰 전달
* 유저 정보를 redux에 저장 및 reload 시 정보가 휘발 되지 않도록 처리

### 2. 게시글 관련 기능

* 전체 게시글 불러오기 기능 구현
* 게시글 작성 및 추가 기능 구현
* 게시글 수정 및 삭제 기능 구현
* 내가 작성한 게시글 모아보기 기능 구현
* 게시글 북마크 기능 구현
* 내가 북마크한 게시글 모아보기 기능 구현

### 3. 게시글 작성/수정

* 파이어베이스의 스토리지를 사용하여 이미지 저장 및 download url 생성
* 이미지 미리보기 기능 구현
* 카페 이름, 게시글 내용(레시피) 작성하여 추가 및 수정 가능


### 4. 작성한 게시글 모아보기 페이지(마이페이지)

* 자신이 작성한 게시글만 모아보는 기능 구현
* 페이지에서 수정, 삭제 기능을 수행할 수 있게 구현

### 5. 게시글 북마크 기능

* 마음에 드는 게시글이 있으면 북마크 하여 저장할 수 있도록 구현
* 북마크한 게시글을 모아볼 수 있는 구현
* 북마크 삭제 가능하도록 구현

### 6. 반응형 디자인

* mobile-first로 반응형 디자인 구현

### 7. 배포하기

* amazon S3로 프론트엔드 배포


## skill stack🍟

1. React(hook)
2. Redux-toolkit, thunk
3. JWT
4. axios
5. styled-components
6. react-router-dom
7. firebase storage
8. amazon S3

