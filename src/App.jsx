import {Header,Footer} from './componets/statics/StaticImport'
import {Home,About,Carta,Franquicia} from './componets/pages/PageImport'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
function App() {
  
  return (  
    <div className='App'>
      <Header/>
      <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/carta' element={<Carta/>}/>
            <Route path='/franquicia' element={<Franquicia/>}/>
    

          </Routes>
        

      </main>
      <Footer/>

    </div>

  );
}

export default App;