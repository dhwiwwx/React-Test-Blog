import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let posts = '서울디지텍고';
  let[글제목, 글제목변경] = useState(['일반고순위','특성화고순위','급식순위']);
  let[따봉, 따봉변경] = useState(0);
  let[modal, modal변경] = useState(false);
  let[누른제목, 누른제목변경] = useState(0)
  let[입력값, 입력값변경] = useState('')

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
      {
        글제목.map(function(글, i){
          return(
            <div className='list'>
            <h3  onClick={ ()=>{누른제목변경(i) } }>{ 글 }<span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span>{따봉}</h3>
            <p>2월 8일 발행</p>
            <hr/>
            </div>
          )
        })
      }

      <div className='publish'>
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }}>저장</button>
      </div>
      
      <button onClick={()=>{modal변경(!modal)}}>버튼</button>
      {
        modal === true
        ?<Modal 글제목={글제목} 누른제목={누른제목}></Modal>  
        : null
      }
    </div>
    
    
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
