import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//estados u otros valores de hooks 
	const [color, setColor] = useState();

	//Function
    const handleChangeColor = (active) => {
		setColor(active);
	}



	return (
		
		<div>
			<div id= "trafficTop"></div>
		<div id="container">
			 <button className= {`redLight ${color == "red" ? "active" : ""}`}  onClick = {() => handleChangeColor("red")}></button>
			 <button className=  {`yellowLight ${color == "yellow" ? "active" : ""}`}  onClick = {() => handleChangeColor("yellow")}></button>
			 <button className= {`greenLight ${color == "green" ? "active" : ""}`} onClick = {() => handleChangeColor("green")}></button>
		</div>
	</div>
		
	);
};

export default Home;
