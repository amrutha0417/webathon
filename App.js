import "./App.css";

import Navbar from "./components/one/Navbarb";
import User from "./components/one/User";
 
function App(){
 
  let p1={
    image:"https://www.azolifesciences.com/image.axd?picture=2020%2F7%2Fshutterstock_700905340.jpg",
  
  }
  
 
  return(
   <div className="App">
    <div>
    <Navbar/>
    <h1 className="h" > E-kisaan </h1>
    <div className="places">
      <div className="c1">
        <User x={p1}/>
      </div>
      
    </div>
    </div>
    </div>
  );
}
export default App;