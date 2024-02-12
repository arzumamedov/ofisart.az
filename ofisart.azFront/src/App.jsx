import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout/Mainlayout'
import BestSeller from './pages/BestSeller/BestSeller'
import Homepage from './pages/Home/Homepage'
import DetailPage from './pages/Detail/DetailPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import NewProduct from './pages/NewProduct/NewProduct'
import MenagerDesk from './pages/MenagerDesk/MenagerDesk'
import StaffTable from './pages/StaffTable/StaffTable'
import MeetingTable from './pages/MeetingTable/MeetingTable'
import HomeDesk from './pages/HomeDesk/HomeDesk'
import Executivechair from './pages/ExecutiveChair/ExecutiveChair'
import ExecutiveChair from './pages/ExecutiveChair/ExecutiveChair'
import StaffChair from './pages/StaffChair/StaffChair'
import Sofa from './pages/Sofa/Sofa'
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
            <Route path='/menagerdesk' element={<MenagerDesk />} />
            <Route path='/stafftable' element={<StaffTable />} />
            <Route path='/meetingtable' element={<MeetingTable />} />
            <Route path='/homedesk' element={<HomeDesk />} />
            <Route path='/executivechair' element={<ExecutiveChair />} />
            <Route path='/staffchair' element={<StaffChair />} />
            <Route path='/sofa' element={<Sofa />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
