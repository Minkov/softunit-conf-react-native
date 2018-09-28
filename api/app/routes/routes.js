import { Router } from 'express';
const todos = [
    { id: 1, text: 'Wash the dishes', isDone: true },
    { id: 2, text: 'Clean the house', isDone: false },
    { id: 3, text: 'Fix the bug', isDone: false },
    { id: 4, text: 'ala bala nica', isDone: true },
];

const attachTo = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            res.send(todos);
        })
        .post('/', (req, res) => {
            const todo = req.body;
            todo.id = Math.max(0, ...todos.map(t => t.id)) + 1;
            todos.push(todo);
            res.send(todo);
        });

    app.use('/api/todos', router);
};

export { attachTo };