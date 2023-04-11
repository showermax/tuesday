import {FilterValuesType} from "../App";

export const FilterReducer=(state:FilterValuesType, action:any) =>{
    switch (action.type){
        case 'CHANGE_TASK':{
            return action.payload.value
        }
    }
}

type changeFilterACType=ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value:FilterValuesType)=>{
    return {
        type: 'CHANGE_TASK',
        payload:{
            value
        }
    } as const
}