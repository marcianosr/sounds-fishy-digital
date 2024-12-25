import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import QuestionNavigator from "./QuestionNavigator";
import questionsData from "./questions.json";
import "./App.css";

// Utility function to shuffle an array
const shuffleArray = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const App: React.FC = () => {
	const [questions, setQuestions] = useState(() =>
		shuffleArray([...questionsData])
	);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [completedQuestions, setCompletedQuestions] = useState<
		Record<number, boolean>
	>(() => {
		const storedData = localStorage.getItem("completedQuestions");
		return storedData ? JSON.parse(storedData) : {};
	});

	useEffect(() => {
		localStorage.setItem(
			"completedQuestions",
			JSON.stringify(completedQuestions)
		);
	}, [completedQuestions]);

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const handleNext = () => {
		if (currentIndex < questions.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handleMarkDone = () => {
		const questionId = questions[currentIndex].id;
		setCompletedQuestions((prevState) => ({
			...prevState,
			[questionId]: true,
		}));
		if (currentIndex < questions.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handleReset = () => {
		setCompletedQuestions({});
		setCurrentIndex(0);
	};

	return (
		<div className="app">
			<QuestionCard
				question={questions[currentIndex].question}
				answer={questions[currentIndex].correct_answer}
				isDone={!!completedQuestions[questions[currentIndex].id]}
			/>
			<QuestionNavigator
				currentIndex={currentIndex}
				totalQuestions={questions.length}
				onPrev={handlePrev}
				onNext={handleNext}
				onMarkDone={handleMarkDone}
			/>
			<button onClick={handleReset} className="reset-button">
				Reset
			</button>
		</div>
	);
};

export default App;
