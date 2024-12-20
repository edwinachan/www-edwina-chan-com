import React from 'preact/compat';
import './style.css';
import { MiniContent } from '../../components/MiniContent/MiniContent';

export function Content() {
	return (
		<div class='content'>
			<MiniContent title="Title 1" />
            <MiniContent title="Title 2" />
            <MiniContent title="Title 3" />
            <MiniContent title="Title 4" />
		</div>
	);
}

