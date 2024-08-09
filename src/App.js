import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Banner from './components/Banner';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <PostList />
            </>
          }
          />
      </Routes>
    </Router>

    // <div>
    //   <Navbar />
    //   <div className='relative' style={{ marginTop: '-7vw' }}>ini dia</div>
    //   <div style={{height:"1000px"}}>
        
    //   </div>
    // </div>
  );
}

export default App;
