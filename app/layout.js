export default ({ children }) => (
	<html>
		<head>
			<title>Partial build POC</title>
		</head>
		<body>
			This page is partially built.
			<article>{children}</article>
			<footer>
				<a href="/">Home</a>
				<a href="/a">A</a>
				<a href="/b">B</a>
			</footer>
		</body>
	</html>
);
