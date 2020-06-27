// let findUserAge = require('../findUserAge');
import chai from 'chai';
import { findUserAge } from '../index';

let assert = chai.assert;

describe('findUserAge', function () {
	let users = [
		{ userName: 'ehdna1234', age: 20, gender: 'male' },
		{ userName: 'Lee1234', age: 28, gender: 'female' },
		{ userName: 'Jane123', age: 30, gender: 'female' },
		{ userName: 'Tom000', age: 15, gender: 'male' },
	];
	it("should return 존재하지 않는 유저입니다. when the userName doesn't exist", function () {
		assert.equal(findUserAge(users, 'ehdna'), '존재하지 않는 유저입니다.');
	});
	it('should return 30 when the userName is Jane123', function () {
		assert.equal(findUserAge(users, 'Jane123'), 30);
	});
	it('should return 15 when the userName is Tom000', function () {
		assert.equal(findUserAge(users, 'Tom000'), 15);
	});
});
