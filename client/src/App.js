import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import AdminDashbaord from './pages/admin/Dashboard'
import StudentDashboard from './pages/student/Dashboard'
import TutorDashboard from './pages/tutor/Dashboard'
import CreateQuiz from './pages/tutor/CreateQuiz'
import Tutors from './pages/Tutors'
import TutorProfile from './pages/TutorProfile'
import Quiz from './pages/Quiz'
import { useSelector } from 'react-redux'
import Messages from './pages/Messages'
import StudentProfile from './pages/StudentProfile'
function App() {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* admin routes */}
          <Route path='/admin/dashboard' element={user ? <AdminDashbaord /> : <Login />} />
          {/* student routes */}
          <Route path='/student/dashboard' element={user ? <StudentDashboard /> : <Login />} />
          {/* tutor routes */}
          <Route path='/tutors' element={<Tutors />} />
          <Route path='/tutor/:id' element={<TutorProfile />} />
          <Route path='/tutor/dashboard' element={user ? <TutorDashboard /> : <Login />} />
          <Route path='/tutor/quiz/create' element={<CreateQuiz />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          {/* <Route path='/message' element={user ? <Messages /> : <Login />}></Route> */}
          {/* Student routes */}
          <Route path='/student/:id' element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
