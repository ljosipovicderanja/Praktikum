let scores;

function registerPoints(points) {
	scores = [0, 0];
	for (let i = 0; i < points.length; i += 3) {
		const chunk = points.slice(i, i + 3);
		const sum = chunk.reduce((partialSum, a) => partialSum + a, 0);
		const player = (i / 3) % 2;
		scores[player] += sum;
	}
}

function getScore() {
	return scores;
}

module.exports = { registerPoints, getScore, scores };
