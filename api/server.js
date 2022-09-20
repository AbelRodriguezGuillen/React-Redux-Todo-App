import express from 'express';
const app = express();
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import json from 'body-parser'
import { nanoid } from 'nanoid'
import bodyParser from 'body-parser';
import mysql from 'mysql'

dotenv.config({ path: './config.env' });

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root123',
//     database: 'policy_app'
// });


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

let policies = [
	{
		id: nanoid(),
		title: 'Health & Wealth',
		selected: false,
		cost: 159.70,
	},
	{
		id: nanoid(),
		title: 'Catastrophic Emergency Fund',
		selected: false,
		cost: 78.5,
	},
	{
		id: nanoid(),
		title: 'Dental, Medical & Employer Plus',
		selected: false,
		cost: 198.2,
	},
	{
		id: nanoid(),
		title: 'Life and Disability',
		selected: false,
		cost: 30,
	},
];

// app.get('/todos', (req, res) => {
// 	res.send(todos)
// });
app.get('/policies', (req, res) => {
	res.send(policies)
});

// app.post('/todos', (req, res) => {
// 	const todo = { title: req.body.title, id: nanoid(), completed: false, cost: req.body.cost};
// 	todos.push(todo);
// 	return res.send(todo);
// });
// app.post('/policies':id, (req, res) => {
// 	const policySelected = { id: id, selected: true };
// 	policies.push(policySelected);
// 	return res.status(200);
// });


// app.patch('/todos', (req, res) => {
// 	const id = req.params.id;
// 	const index = todos.findIndex((todo) => todo.id === id);
// 	const completed = Boolean(req.body.completed);
// 	if (index > -1) {
// 		todos[index].completed = completed;
// 	}
// 	return res.send(todos[index]);
// });
app.patch('/policies/:id', (req, res) => {
	const id = req.params.id;
	const index = policies.findIndex((policy) => policy.id === id);
	const selected = Boolean(req.body.selected);
	if (index > -1) {
		policies[index].selected = selected;
	}
	return res.send(policies[index]);
});


// app.delete('/todos/:id', (req, res) => {
// 	const id = req.params.id;
// 	const index = todos.findIndex((todo) => todo.id === id);
// 	if (index > -1) {
// 		todos.splice(index, 1);
// 	}
// 	res.send(todos);
// });
app.delete('/policies/:id', (req, res) => {
	const id = req.params.id;
	const index = policies.findIndex((policy) => policy.id === id);
	if (index > -1) {
		policies.splice(index, 1);
	}
	res.send(policies);
});

const PORT = 7000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));