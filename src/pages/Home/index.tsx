import React from 'preact/compat';
import './style.css';
import profilePic from '../../assets/profilePic.jpeg';

export function Home() {
	return (
		<div class="bio">
			<section>
					<h1>Hi, I'm Edwina</h1>
					<h2>I'm a software engineer</h2>
					<p>
						I currently work in the Build and Launch team supporting iPlayer and Sounds on TV,
						but my previous experience includes building features for the playback and discovery 
						space on the iPlayer app, as well as features for Sounds.
					</p>
				{ /*<img src={profilePic} height='50%' width='50%' /> */}
			</section>
		</div>
	);
}

