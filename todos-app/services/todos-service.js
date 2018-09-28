import Data from '../data/data';

import { getValidator } from '../validators';

class TodosService {
    constructor() {
        this.data = new Data('todos');
        this.validator = getValidator('todos');
    }

    async getAll() {
        return this.data.getAll();
    }

    async add(todo) {
        const validationResult = this.validator.validate(todo);
        if (!validationResult.isValid) {
            throw new Error('Invalid Todo');
        }

        return this.data.add(todo);
    }

    async changeTodoState(todoId) {
        const todos = await this.getAll();
        const todo = todos.find(todo => todo.id === todoId);
        todo.isDone = !todo.isDone;
        return this.data.update(todo);
    }
}

export default TodosService;
