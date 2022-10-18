import React from 'react';
import {Link} from 'react-router-dom'

function Navbar({show}) {
    if(show){
        return(
            <React.Fragment>
             <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/carta'>Carta</Link></li>
                <li><Link to='/franquicia'>Franquicia</Link></li>
                <li><Link to='/about'>Contacto</Link></li>

            </ul>
            </nav>
            <div>

            </div>
            </React.Fragment>
        )
        
    }

    return (
       <React.Fragment>
        
       </React.Fragment>
    );
}

export default Navbar;