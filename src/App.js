import logo from './logo.svg';
import './App.css';
import React, { PureComponent, useState } from 'react';

function App() {
  let posts = '서울디지텍고';
  let [title, setTitle] = useState(['일반고순위', '특성화고순위', '급식순위']);
  let [like, setlike] = useState(0);
  let [modal, setModal] = useState(false);
  let [ontitle, setOntitle] = useState(0)
  let [changeInput, setchangeInput] = useState('')

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = '특성화고순위';
    newArray[1] = '일반고순위'
    setTitle(newArray);
  }
  return (
    <div className="App">
      <div className='gray-nav'>
        <div>테스트 Blog</div>
      </div>
      {
        title.map(function (글, i) {
          return (
            <div className='list'>
              <h3 onClick={() => { setOntitle(i) }}>{글}
                <span onClick={() => {
                  let likecopy = [...like];
                  likecopy[i] = likecopy[i] + 1;
                  setlike(likecopy)
                }}>👍</span>{like[i]}</h3>
              <p>2월 8일 발행</p>
              <button onClick={() => {
                let deletecopy = [...title];
                deletecopy.splice(i, 1);
                setTitle(deletecopy)
              }}>삭제</button>
              <hr />
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={(e) => {setchangeInput(e.target.value) }} />
        <button onClick={() => {
          var arrayCopy = [...title];
          arrayCopy.unshift(changeInput);
          setTitle(arrayCopy);
        }}>저장</button>
      </div>

      <button onClick={() => { setModal(!modal) }}>버튼</button>
      {
        modal === true
          ? <Modal ontitle={ontitle} title={title}></Modal>
          : null
      }
    </div>


  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title[props.ontitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
