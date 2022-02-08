import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '서울디지텍고'
  return (
    <div className="App">
      <div className='gray-nav'>
        <div style={}>테스트 Blog</div>
      </div>
      <img src={logo}></img>
      <h4>{posts}</h4>
    </div>
    
  );
}

export default App;
