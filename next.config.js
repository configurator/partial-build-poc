module.exports = {
	output: 'export',
};

if (process.env.PARTIAL_BUILD) {
	module.exports.pageExtensions = ['build.js'];
}
