import React, { useState, useEffect } from 'react';
import {
  LoadingDiv,
  LoadingImg,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  PagenumberDiv,
  PagingSection,
  CursorDiv,
} from './styledComponent';
import { useNavigate } from 'react-router-dom';

import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadingIcon from './loading.svg';

import EachPost from './EachPost';

const initialPostList = [
  { id: 1, title: '기사 1', replCount: 1 },
  { id: 1, title: '기사 2', replCount: 43 },
  { id: 1, title: '기사 3', replCount: 3 },
];

function ShowPostList() {
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리할 변수
  const [isPost, setIsPost] = useState(false); // 포스트가 있는지 확인할 변수
  const [postList, setPostList] = useState([]);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: '기사 4', replCount: 2 },
    ]);
  };

  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    setTimeout(() => {
      setPostList(initialPostList);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  replCount={element.replCount}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
