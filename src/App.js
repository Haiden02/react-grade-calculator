import HomePage from './components/home/HomePage';
import CoursePage from './components/course/CoursePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/course' element={<CoursePage />} />
      </Routes>
    </>
  )
}

export default App;
