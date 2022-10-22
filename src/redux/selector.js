export const todoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search)
    })

    return todosRemaining
}

export const searchTextSelector = (state) => state.filters.search