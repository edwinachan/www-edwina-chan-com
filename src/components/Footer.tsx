import { useLocation } from 'preact-iso';
import email from '../assets/email.svg';

export function Footer() {
	const { url } = useLocation();

	return (
		<footer>
			<nav>
				<a href="mailto:edwinachan91@gmail.com">
					<img class="email" src={email}/>
				</a>
			</nav>
		</footer>
	);
}
