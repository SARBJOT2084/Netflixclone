import React, { useEffect ,useState} from 'react'
import "./Nav.css"

function Nav(){
    const [show,handleShow] =useState(false);
   useEffect(() => {
    window.addEventListener("scroll",() =>{
        if(window.scrollY > 100){
            handleShow(true);

        }
        else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    }
   },[]);
    return(
    
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1024px-Logonetflix.png"
            alt="Netflix Logo"
        />
         <img className="nav__avatar" 
            src="https://th.bing.com/th/id/OIP.WYdmgB_yvYiKBjXD85znzAAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="Netflix Logo"
        />

    </div>
        )
}
export default Nav