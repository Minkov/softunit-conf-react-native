const getValidator = () => {
    return {
        validate(item) {
            return { isValid: true };
        },
    };
};

export {
    getValidator,
};
