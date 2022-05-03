import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import AdminDashbaord from './pages/admin/Dashboard'
import StudentDashboard from './pages/student/Dashboard'
import TutorDashboard from './pages/tutor/Dashboard'
import CreateQuiz from './pages/tutor/CreateQuiz'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        {/* admin routes */}
        <Route path='/admin/dashboard' element={<AdminDashbaord/>} />
        {/* student routes */}
        <Route path='/student/dashboard' element={<StudentDashboard/>} />
        {/* tutor routes */}
        <Route path='/tutor/dashboard' element={<TutorDashboard/>} />
        <Route path='/tutor/quiz/create' element={<CreateQuiz/>} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
