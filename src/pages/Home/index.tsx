import React from 'preact/compat';
import './style.css';
import { Title } from '../../components/Title/Title';
import { Bio } from '../../components/Bio/Bio';
import { Contact } from '../../components/Contact/Contact';


export function Home() {
	return (
		<div class='home'>
				<Title />
				<Bio />
				<Contact />
		</div>
	);
}

