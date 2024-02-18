import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout/Mainlayout'
import Accessory from './pages/Accessory/Accessory'
import BestSeller from './pages/BestSeller/BestSeller'
import DetailPage from './pages/Detail/DetailPage'
import Dresser from './pages/Dresser/Dresser'
import ExecutiveChair from './pages/ExecutiveChair/ExecutiveChair'
import FilingCabinet from './pages/FilingCabinet/FilingCabinet'
import Hanger from './pages/Hanger/Hanger'
import Homepage from './pages/Home/Homepage'
import HomeOfficeDesk from './pages/HomeOfficeDesk/HomeOfficeDesk'
import MagazineTable from './pages/MagazineTable/MagazineTable'
import MeetingTable from './pages/MeetingTable/MeetingTable'
import MenagerDesk from './pages/MenagerDesk/MenagerDesk'
import NewProduct from './pages/NewProduct/NewProduct'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import Sofa from './pages/Sofa/Sofa'
import StaffChair from './pages/StaffChair/StaffChair'
import StaffTable from './pages/StaffTable/StaffTable'
import Tumba from './pages/Tumba/Tumba'
import Wardrobe from './pages/Wardrobe/Wardrobe'
import Login from './pages/Login/Login'
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
            <Route path='/homeofficedesk' element={<HomeOfficeDesk />} />
            <Route path='/executivechair' element={<ExecutiveChair />} />
            <Route path='/staffchair' element={<StaffChair />} />
            <Route path='/sofa' element={<Sofa />} />
            <Route path='/wardrobe' element={<Wardrobe />} />
            <Route path='/filingcabinet' element={<FilingCabinet />} />
            <Route path='/dresser' element={<Dresser />} />
            <Route path='/tumba' element={<Tumba />} />
            <Route path='/hanger' element={<Hanger />} />
            <Route path='/magazinetable' element={<MagazineTable />} />
            <Route path='/accessory' element={<Accessory />} />
            <Route path='/login' element={<Login />} />





            {/* <Route path='/login' element={<YourComponent />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
