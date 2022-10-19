import {FaBars} from 'react-icons/fa'

function Header() {
    return (
        <header>
            <div className="header_box_till">
                <h1>La Milonguera</h1>
            </div>
            <div className='header_box_icon_but'>
                <FaBars className='icon_but'/>

            </div>
        </header>

    );
}

export default Header;