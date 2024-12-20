import React from 'preact/compat';
import './style.css';
import { Bio } from '../../components/Bio/Bio';
import { Content } from '../Content/Content';
import { Menu } from '../Menu/Menu';

export function Home() {
	return (
		<div class='home'>
			<section class="nav">
				<Bio />
				<Menu />
			</section>
			<section class="content">
				<Content />
			</section>
		</div>
	);
}

