import React, {ChangeEvent, useState} from 'react';

type PropsType ={
    title:string
    editSpan: (title: string)=>void
}
export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit]=useState<boolean>(false)
    const [title, setTitle]=useState(props.title)
    const  onDoubleClickHandler =()=>{
        setEdit(!edit)
        if (edit) {
            addTask()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = ()=>{
        props.editSpan(title)
    }
    return (
        edit
            ? <input type={'text'} value = {title} onChange={onChangeHandler}
                     onBlur={onDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    );
};

