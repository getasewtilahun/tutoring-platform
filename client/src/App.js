import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import AdminDashbaord from './pages/admin/Dashboard'
import StudentDashboard from './pages/student/Dashboard'
import TutorDashboard from './pages/tutor/Dashboard'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/admin/dashboard' element={<AdminDashbaord/>} />
        <Route path='/student/dashboard' element={<StudentDashboard/>} />
        <Route path='/tutor/dashboard' element={<TutorDashboard/>} />

      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
