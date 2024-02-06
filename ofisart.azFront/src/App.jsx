import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout/Mainlayout'
import BestSeller from './pages/BestSeller/BestSeller'
import Homepage from './pages/Home/Homepage'
import DetailPage from './pages/Detail/DetailPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path='/bestseller' element={<BestSeller />} />
            <Route path='/detail/:id' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
