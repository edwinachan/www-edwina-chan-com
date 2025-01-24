import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/" class={url == '/' && 'active'}>
					About Me
				</a>
				<a href="/" class={url == '/' && 'active'}>
					Contact
				</a>
			</nav>
		</header>
	);
}
