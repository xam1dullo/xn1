import express from "express";
// const express = require("express");

// const app
const app = express();

//middleware
app.use(express.json());
//use =  GET, POST, DELETE, PUT/PATCH  ALL

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

// 1. User yaratish

app.post("/user", (req, res) => {
	const body = req.body;

	const user = {
		...body,
		id: userList.length,
	};
	userList.push(user);

	res.json({ message: "yaratildi", data: user });
});

// 2. GetAllUser =-> barcha userlarni olib kelish
app.get("/user", (req, res) => {
	res.json(userList);
});
// 3. GetOne =-> bitta userni olib kelish
// http://localhost:4000/user/1
app.get("/user/:id", (req, res) => {
	const id = req.params.id;

	const user = userList.find((user) => user.id === +id);

	if (!user) {
		res.status(404).send("User topilmadi!");
		return;
	}

	res.json(user);
});
// 4. userni ma'lumotni yangilsh

app.put("/user/:id", (req, res) => {
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
});
// 5. userni ro'yhatdan o'chirish.
app.delete("/user/:id", (req, res) => {
	//const id = req.params.id
	const { id } = req.params;

	const userIndex = userList.findIndex((user) => user.id === +id);

	if (userIndex === -1) {
		res.status(404).send("user not found!.");
	}

	userList.splice(userIndex, 1);

	res.send("ochirildi!");
});

//method =->
// 1. -> GET,  - olib kelish.
// 2. -> POST,  - yaratish uchun .
// 3. -> PUT,  - yangilash uchun.
// 4. -> PATCH,  - yangilash uchun faqat  1 ta ma'lumotni o'zi.
// 5. -> DELETE   - o'chirish uchun.

// / - > http://localhost:4000/
// app.get("/", (req, res) => {
// 	const { url, method, headers } = req;

// 	console.log({
// 		url,
// 		method,
// 		headers,
// 	});

// 	res.send("Hello from Express.js");
// });

// app.get("/abc", (req, res) => {
// 	res.send("Hello ABC");
// });

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`server running on port: ${PORT}`);
});

/*
	import http from "node:http";

	const server = http.createServer((req, res) => {
		res.write("ok");
		res.end();
	});

	const PORT = 3000;

	server.listen(PORT, () => {
		console.log(`Server running on port :${PORT}`);
	});

*/
