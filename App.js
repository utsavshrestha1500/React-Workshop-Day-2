//import logo from './logo.svg';
//import './App.css';
//import { buttonStyle } from "./style.js";
import "bootstrap/dist/css/bootstrap.css";
import TempleImage from "./assets/css/images/temple.jpg";
function App() {
  console.log(TempleImage);
  return (
    <>
   <img src={TempleImage} alt="pic" style={{ height: "200px", width: "200px"}} />
      
  </>   
)}

export default App;
