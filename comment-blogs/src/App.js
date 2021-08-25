import logo from './logo.svg';
import './App.css';
import Blogs from './components/blogs';

function App() {
  return (
    <div className="App">
      <h2  style={{color: "red", textAlign:"center"}}>Blogs</h2>
      <hr/>
      <Blogs/>
    </div>
  );
}

export default App;
