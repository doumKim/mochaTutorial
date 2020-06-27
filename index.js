export const findUserAge = (users, userName) => {
	return users.reduce((userAge, user) => {
		return user.userName === userName ? (userAge = user.age) : userAge;
	}, '존재하지 않는 유저입니다.');
};
