import '../Home/NavBarH.css'
import User from './Img/user.png'
import Logo from './Img/TechquizBlack.png'

const NavBarH = () => {
    return ( 
        <nav className="navbar">
            <div className='logo'>
                <img src={Logo}/>
            </div>   
            <div className="links">
                <a className='Separadores' href="/">Home</a>
                <a className='Separadores' href="/create">Support</a>
                <a className='Separadores' href="/create">AboutUs</a>
                <a className='Separadores' href="/create">Sugestões</a>
            </div>
            <div className='textbox'>
                <input  type="text" placeholder="Search.."/>
            </div>
            <div className="links1">
                <a href="/login">Login</a>
            </div>
            <div className="profile">
                <img src={User}/>
            </div>        
        </nav>
     );
}
 
export default NavBarH;