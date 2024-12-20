import React from 'preact/compat';
import './style.css';

export function MiniContent({ title }: { title: string }) {
	return (
		<div class="miniContent">
			<section>
					<h1>{title}</h1>
					<p>
						Lots of example text Lots of example text<br />
                        Lots of example text Lots of example text<br />
                        Lots of example text Lots of example text<br />
                        Lots of example text Lots of example text<br />
                        Lots of example text Lots of example text
					</p>
			</section>
		</div>
	);
}

