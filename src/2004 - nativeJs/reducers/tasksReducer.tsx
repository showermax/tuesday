                import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer=(state:TaskType[], action: TsarType)=>{
    switch (action.type) {
        case 'REMOVE-TASK' : {
            return state.filter(el=>el.id !== action.payload.taskID)
        }
        case 'ADD-TASK' : {
            return [{id: v1(), title: action.payload.title, isDone: false}, ...state]
        }
        default: return state
    }
}

type TsarType=RemoveTaskACType | AddTaskACType

type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (taskID:string) =>{
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskID //пара ключ значение совпадает taskID:taskID
        }
    } as const
}

type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title:string) =>{
    return {
        type: 'ADD-TASK',
        payload: {
            title
        }
    } as const
}