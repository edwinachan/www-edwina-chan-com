import React, { useEffect, useState } from 'preact/compat';
import './style.css';
import { carousel } from '../../helpers/typingText';

export function Title() {
	// const [isTrue, shouldBeTrue] = useState(true);
	const carouselText = ['Software Engineer', 'Hiker', 'Cyclist'];
	useEffect(() => {
		carousel(carouselText, document.getElementById('sentence'));
	}, [])
	
	return (
		<div class="title">
			<h1>Hi, I'm Edwina</h1>
			<div class="typing-container">
				<span id="sentence" class="sentence"></span>
				<span class="input-cursor"></span>
				<span id="feature-text"></span>
			</div>
		</div>
	);
}

