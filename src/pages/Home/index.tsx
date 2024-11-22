import React from 'preact/compat';
import './style.css';
import profilePic from '../../assets/profilePic.jpeg';

export function Home() {
	return (
		<div class="home">
			<h1>Edwina Chan</h1>
			<section>
				<p>Watch this space...</p>
				<img src={profilePic} height='50%' width='50%' />
			</section>
		</div>
	);
}

