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

store.dispatch(addtask("Eat food"))
console.log("updated state: ", store.getState());

// store.dispatch({ type: AddTask, payload: "do your work" })
store.dispatch(addtask("do your work"))
console.log("updated state: ", store.getState());

// store.dispatch({ type: DeleteTask, payload: 1 })
store.dispatch(delTask())
console.log("deleted task: ", store.getState())


// create action creator
function addtask(data) {
    return { type: AddTask, payload: data }
}
function delTask() {
    return { type: DeleteTask, payload: 0 }
}