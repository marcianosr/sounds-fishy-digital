import React from "react";
import "./QuestionNavigator.css";

type QuestionNavigatorProps = {
	currentIndex: number;
	totalQuestions: number;
	onPrev: () => void;
	onMarkDone: () => void;
};

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
	currentIndex,
	totalQuestions,
	onPrev,
	onMarkDone,
}) => {
	return (
		<div className="navigator">
			<button onClick={onPrev} disabled={currentIndex === 0}>
				Vorige
			</button>
			<span>
				{currentIndex + 1} / {totalQuestions}
			</span>
			<button onClick={onMarkDone}>Volgende ✅</button>
		</div>
	);
};

export default QuestionNavigator;
