const { registerPoints, getScore, scores } = require("./pikado");

describe("Point registration", () => {
	test("After registering points [1] scores are [1, 0]", () => {
		registerPoints([1]);
		expect(getScore()).toStrictEqual([1, 0]);
	});
	test("After registering points [1, 2, 3] scores are [6, 0]", () => {
		registerPoints([1, 2, 3]);
		expect(getScore()).toStrictEqual([6, 0]);
	});
	test("After registering points [0, 0, 0, 10, 10, 10] scores are [0, 30]", () => {
		registerPoints([0, 0, 0, 10, 10, 10]);
		expect(getScore()).toStrictEqual([0, 30]);
	});
	test("After registering points [0, 1, 0, 1, 0, 1, 0, 1] scores are [2, 2]", () => {
		registerPoints([0, 1, 0, 1, 0, 1, 0, 1]);
		expect(getScore()).toStrictEqual([2, 2]);
	});
});
