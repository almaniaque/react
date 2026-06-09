import './App.css'
import TopBar from './component/TopBar'
import RecetteListe from './component/RecetteListe'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<RecetteListe />} />
        <Route path="/Recette" element={<RecetteListe />} />
        <Route path="/Contact" element={<RecetteListe />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
