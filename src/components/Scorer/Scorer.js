import React from "react";
import "./Scorer.css";


const Scorer = props => (
	<div className="Yert">
		<div className="panel-heading"></div>
		<div className="panel-body">
			
			<p className="textScore">Click Score: {props.score}</p>
			<p className="textScore">Correct: {props.correct}</p>
			<p className="textScore">Incorrect: {props.incorrect}</p>

		</div>
	</div>		

);

export default Scorer;