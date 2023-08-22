import { createSlice,PayloadAction} from '@reduxjs/toolkit' 
import { ITodoItem } from '../../../types/todo'
import { RootState } from '../../store'

const initialState:string = ''


export const txtSlice = createSlice({
    name:'txt',
    initialState,
    reducers:{
        toggleTxt:(state,action:PayloadAction<string>) => {
            return action.payload
        },
        resetTxt:() => {
            return ''
        }
    }
})

export const selectTxt = (state:RootState):string => state.txt

export const { toggleTxt,resetTxt } = txtSlice.actions

export const txtRecuer = txtSlice.reducer