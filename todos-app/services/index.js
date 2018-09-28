import TodosService from './todos-service';

const getService = (type) => {
    switch (type) {
        case 'TODOS':
            return new TodosService();
        default:
            return null;
    }
}

const SERVICE_TYPES = {
    TODOS: 'TODOS',
};

export {
    getService,
    SERVICE_TYPES,
};