import React, { useEffect, useState } from 'preact/compat';
import './style.css';
import { carousel } from '../../helpers/typingText';

export function Title() {
	const [activeTab, setActiveTab] = useState(true);
	const carouselText = ['Software Engineer', 'Hiker', 'Cyclist'];
	useEffect(() => {
		console.log('useeffect')
		carousel(carouselText, document.getElementById('sentence'));
	}, []);

	document.addEventListener('visibilitychange', () => {
		console.log('visibility change')
		if (document.hidden) {
			setActiveTab(false)
		} else {
			setActiveTab(true)
		}
	})

	console.log('render', `${new Date().getHours()}:`, `${new Date().getMinutes()}:`, `${new Date().getSeconds()}`)
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

