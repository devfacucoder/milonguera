import './staticStyle.css'
import {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import Navbar from './nav';
function Header() {
    const [navShow,setNavShow] = useState(false)
    
   

    return (
        <header>
            <div className='header_sup'>
                <h1>La Milonguera</h1>
                <FaBars className='but_nav' onClick={()=> setNavShow(!navShow) }/>
            </div>
            <Navbar show={navShow}/>
            
        
        </header>
    );
}

export {Header};