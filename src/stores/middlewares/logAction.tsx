const logAction = (getState: any, dispatch: any) => (next: any) => (action: any) => {
    console.log('ACTION:' + action.type);
    return next(action);
};

export { logAction };
