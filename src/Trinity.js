
import './Trinity.css';

function Trinity() {
    return (
        <div>
            <div className="trans_container">
                <Transportation name="자전거" />
            </div>
            <div className="trans_container">
                <Transportation name="뚜벅이" />
                <Transportation name="킥보드" />
            </div>
        </div>
);
}

function Transportation({name}){
    const transName="./images/"+name+".jpg";

    return(
    
    <div>
        <div className="trans">
            <img className="img_area" src={transName} alt="" />
            <div className="centered">{name}sdsssssfsdf</div>
        </div>
    </div>
  );
}



export default Trinity;
