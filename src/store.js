import { createStore } from "redux"

const AddTask = "task/add"
const DeleteTask = "task/del"

const initialTask = {
    task: [],
}

const taskReducer = (state = initialTask, action) => {
    switch (action.type) {
        case AddTask:
            return {
                ...state,
                task: [...state.task, action.payload],
            }
        case DeleteTask:
            const updateTask = state.task.filter((val, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                task: updateTask
            }
        default:
            return state;
    }
}

export default taskReducer;

const store = createStore(taskReducer)
console.log("initial: ", store.getState());

store.dispatch({ type: AddTask, payload: "Eat food" })
console.log("updated state: ", store.getState());
store.dispatch({ type: AddTask, payload: "do your work" })
console.log("updated state: ", store.getState());
store.dispatch({ type: DeleteTask, payload: 1 })
console.log("deleted task: ", store.getState())