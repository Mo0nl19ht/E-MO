import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="area_container">
      <Area name="서울" />
      <Area name="서울" />
      
    </div>
    <div className="area_container">
      <Area name="서울" />
      
      <Area name="서울" />
    </div>
    </div>
  );
}

function Area({name}){
  const areaName="./images/"+name+".jpg";
  
  return(
    
    <div>
      <div className="area">
        <img className="img_area" src={areaName} alt="" />
        <div className="centered">{name}sdfsdf</div>
      </div>
    </div>
  )
}



export default App;
