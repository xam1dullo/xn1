// 1. function
// 2 userController = {}
const userList = [
	{
		id: 1,
		name: "Ali",
		age: 22,
		gender: "Male",
		email: "ali@gmail.com",
		password: "qwer1234",
	},
	{
		id: 2,
		name: "Usmon",
		age: 21,
		gender: "Male",
		email: "usmon@gmail.com",
		password: "nnknknkn",
	},
];

export const userController = {
	create: (req, res) => {
		const body = req.body;

		const user = {
			...body,
			id: userList.length,
		};
		userList.push(user);

		res.json({ message: "yaratildi", data: user });
	},
	findAll: (req, res) => {
		res.json(userList);
	},
	findOne: (req, res) => {
		const id = req.params.id;

		const user = userList.find((user) => user.id === +id);

		if (!user) {
			res.status(404).send("User topilmadi!");
			return;
		}

		res.json(user);
	},
	update: (req, res) => {
		const body = req.body;
		const id = req.params.id;

		const userIndex = userList.findIndex((user) => user.id === +id);

		if (userIndex === -1) {
			res.status(404).send("user not found!.");
		}

		// {
		//
		// 	b:"1",
		// }

		// {
		//
		// 	c: "4"
		// }

		// {
		// a:"3",
		// b:"1"
		// c: "4"
		//}

		const updateUser = {
			...userList[userIndex],
			...body,
		};

		userList.splice(userIndex, 1, updateUser);

		res.send(updateUser);
	},
	remove: (req, res) => {
		//const id = req.params.id
		const { id } = req.params;

		const userIndex = userList.findIndex((user) => user.id === +id);

		if (userIndex === -1) {
			res.status(404).send("user not found!.");
		}

		userList.splice(userIndex, 1);

		res.send("ochirildi!");
	},
};
