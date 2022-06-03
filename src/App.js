import './App.css';
import './Components/app.css'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Home from './Components/Home';
import Tourism from './Components/Tourism';
import Technology from './Components/Technology';
import Fitness from './Components/Fitness';
import Bollywood from './Components/Bollywood';
import Food from './Components/Food';
import { ArticleProvider } from './Components/ArticleContext';
import Article from './Components/Article';

function App() {
  return (
    <ArticleProvider>
    <div className="App">
      <Router>
        <Main/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="Category/Tourism" element={<Tourism/>}/>
          <Route path="Category/Fitness" element={<Fitness/>}/>
          <Route path="Category/Technology" element={<Technology/>}/>
          <Route path="Category/Bollywood" element={<Bollywood/>}/>
          <Route path="Category/Food" element={<Food/>}/>
          <Route path='/article/:ids' element={<Article />} />
        </Routes>
      </Router>
    </div>
    </ArticleProvider>
  );
}

export default App;