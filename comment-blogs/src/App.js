import './App.css';
import Navigation from './components/Navigation';
import AddBlog from './components/AddBlog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blogs from './components/blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Blogs} exact/>
             <Route path="/newblog" component={AddBlog}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
