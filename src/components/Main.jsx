import "../style.css";
import img2 from "../images/react-logo2.png";
export default function Main()
{  
    return(
       < div className="main"> 

       {/* <img src={img2} alt="react-logo2" className="react-logo2" /> */}

       <h1 className="main--title">Fun Facts About React</h1>

       <ul className="main--listelements">
         <li>Was first released in 2013</li>
         <li>Was originally created by Jordan Walke</li>
         <li>Has well over 100K stars on GitHub</li>
         <li>Is maintained by Facebook</li>
         <li>Powers thousands of enterprise apps, including mobile apps</li>
       </ul>

       </div>
    );
    
}