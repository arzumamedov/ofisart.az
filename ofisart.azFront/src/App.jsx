import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout/Mainlayout'
import BestSeller from './pages/BestSeller/BestSeller'
import Homepage from './pages/Home/Homepage'
import DetailPage from './pages/Detail/DetailPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import NewProduct from './pages/NewProduct/NewProduct'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/bestseller' element={<BestSeller />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/detail/:id' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
