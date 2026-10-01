import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeView from './views/HomeView'
import CoursesView from './views/CoursesView'
import AboutView from './views/AboutView'
import LoginView from './views/LoginView'
import NotFoundView from './views/NotFoundView'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cursos" element={<CoursesView />} />
          <Route path="/nosotros" element={<AboutView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
