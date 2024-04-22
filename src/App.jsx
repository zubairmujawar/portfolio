import './App.css'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import ProjectPage from './components/ProjectsPage/ProjectPage'
import Services from './components/Services'
function App() {


  return (
    <>
      <Navbar/>
      <HomePage/>
      <div className='outerBackground'>
        <Services/>
      <ProjectPage/>
      <Contact/>
      </div>
    </>
  )
}

export default App
