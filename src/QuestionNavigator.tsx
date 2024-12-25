import React from "react";
import "./QuestionNavigator.css";

type QuestionNavigatorProps = {
	currentIndex: number;
	totalQuestions: number;
	onPrev: () => void;
	onMarkDone: () => void;
	handleReset: () => void;
};

const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
	currentIndex,
	totalQuestions,
	onPrev,
	onMarkDone,
	handleReset,
}) => {
	return (
		<div className="flex-container">
			<div className="navigator">
				<button onClick={onPrev} disabled={currentIndex === 0}>
					Vorige
				</button>
				<span>
					{currentIndex + 1} / {totalQuestions}
				</span>
				<button onClick={onMarkDone}>Volgende ✅</button>
			</div>

			<button onClick={handleReset} className="reset-button">
				Reset
			</button>
		</div>
	);
};

export default QuestionNavigator;
