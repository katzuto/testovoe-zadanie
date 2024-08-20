import { defaultCases } from "./defaultCases"

export const defaultStore = []

export const taskReducer = (state = defaultStore , action) => {
    switch (action.type) {
        case defaultCases.addTask:
            return [...state, {name: action.name, id: action.id, isDone: action.isDone, isEditing: action.isEditing}]
        case defaultCases.deleteTask:
            return state.filter(todo => todo.id !== action.payload)
        case defaultCases.updateCheckTrue:
            return state.map((task) => task.id === action.payload ? {...task, isDone: true} : {...task})
            case defaultCases.updateCheckFalse:
             return state.map((task) => task.id === action.payload ? {...task, isDone: false} : {...task})
        case defaultCases.editTitle:
            return state.map((task) => task.id === action.payload.id ? {...task, isEditing: true}: {...task})
        case defaultCases.updateTitle:
            return state.map((task) => task.id === action.payload.id ? {...task, name: action.payload.name ,isEditing: false} : {...task})
        default: return state
    }
}