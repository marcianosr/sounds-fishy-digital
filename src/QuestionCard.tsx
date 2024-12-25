import React, { useState } from "react";
import "./QuestionCard.css";

type QuestionCardProps = {
	question: string;
	answer: string;
	isDone: boolean;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
	question,
	answer,
	isDone,
}) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(!flipped);
	};

	console.log("answer");

	return (
		<div
			className={`card ${flipped ? "flipped" : ""} ${
				isDone ? "done" : ""
			}`}
			onClick={handleFlip}
		>
			<div className="card-content">
				<div className={`card-front ${flipped ? "hidden" : ""}`}>
					<p>{question}</p>
				</div>
				<div className={`card-back ${flipped ? "" : "hidden"}`}>
					<p>{answer}</p>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
