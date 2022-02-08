import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let posts = '서울디지텍고';
  let[글제목, 글제목변경] = useState(['일반고순위','특성화고순위','급식순위']);
  let[따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '특성화고순위';
    newArray[1] = '일반고순위'
    글제목변경(newArray);
  }
  return (
    <div className="App"> 
      <div className='gray-nav'>
        <div>테스트 Blog</div>
      </div>
      <div className='list'>
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
        <p>2월 8일 발행</p>
        <button onClick={제목바꾸기}>버튼</button>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 8일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 8일 발행</p>
        <hr/>
      </div>
    </div>
    
  );
}

export default App;
