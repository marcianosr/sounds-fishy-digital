import React, { useEffect, useState } from "react";
import "./Fish.css";

const Fish: React.FC = () => {
	const fishes = ["🐟", "🐠", "🐡", "🐙"];

	const [positions, setPositions] = useState<
		{
			top: number;
			left: number;
			delay: number;
			randomFish: number;
			scale: number;
		}[]
	>(
		Array.from({ length: 10 }, () => ({
			top: Math.random() * 100,
			left: -5,
			delay: Math.random() * 50,
			randomFish: Math.floor(Math.random() * fishes.length),
			scale: Math.random() * 1 + 0.5,
		}))
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setPositions((prevPositions) =>
				prevPositions.map(() => ({
					top: Math.random() * 100,
					left: -5, 
					delay: Math.random() * 50,
					randomFish: Math.floor(Math.random() * fishes.length),
					scale: Math.random() * 1 + 0.5,
				}))
			);
		}, 40000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{positions.map((position, index) => (
				<div
					key={index}
					className="fish"
					style={{
						top: `${position.top}%`,
						left: `${position.left}%`,
						animationDelay: `${position.delay}s`,
						transform: `scale(${position.scale})`,
					}}
				>
					{fishes[position.randomFish]}
				</div>
			))}
		</>
	);
};

export default Fish;
