import Main from './components/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import OpenTerminal from './components/pages/OpenTerminal';
function App() {


  return (
    <>
     <section>
        <Routes>
          <Route path='/' element={
            <>
              <Main>

              </Main>
            </>
          } />
                  <Route path='/projects' element={ <Projects /> }></Route>
                  <Route path='/about' element={ <About/> }></Route>
                  <Route path='/contacts' element={ <Contacts/> }></Route>
                  <Route path='/open__terminal' element= { <OpenTerminal></OpenTerminal>}></Route>
        </Routes>

     </section>
    </>
  )
}

export default App
