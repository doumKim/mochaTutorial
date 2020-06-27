export const findUserAge = (users, userName) => {
	return users.reduce((userAge, user) => {
		if (user.userName === userName) {
			return (userAge = user.age);
		} else {
			return userAge;
		}
	}, '존재하지 않는 유저입니다.');
};
