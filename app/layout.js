import Link from 'next/link';
import { Counter } from '../components/counter';

export default ({ children }) => (
	<html>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Partial build POC</title>
			<link rel="stylesheet" href="https://unpkg.com/awsm.css/dist/awsm.min.css" />
			<link
				href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i"
				rel="stylesheet"
			/>
		</head>
		<body>
			<article>
				<header>
					This page has been partially built.
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/a">A</Link>
						</li>
						<li>
							<Link href="/b">B</Link>
						</li>
					</ul>
					Click counter: <Counter />
				</header>
				{children}
			</article>
		</body>
	</html>
);
