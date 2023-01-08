import React , { useContext } from 'react';

// import context
import { TodoContext } from '../Contexts/TodoProvider';

// icons
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

const Todo = ({task , complete , id}) => {
    // use context
    const {todoList , setTodoList , completedTaskCount , setCompletedTaskCount} = useContext(TodoContext);

    // handle complete
    const handleComplete = () => {
        let list = todoList.map(task => {
            let item = {};
            if(task.id === id){
                if(!task.complete){
                    setCompletedTaskCount(prevNum => prevNum + 1);
                }
                else{
                    if(completedTaskCount === 0){
                        setCompletedTaskCount(0)
                    }
                    else{
                        setCompletedTaskCount(prevNum => prevNum - 1);
                    }
                }
                item = {...task , complete: !task.complete};
            }
            else {
                item = {...task};
            }
            return item;
        })
        setTodoList(list);
    }

    // handle remove
    const handleRemove = () => {
        const newList = todoList.filter(todo => todo.id !== id);
        const removedTodo = todoList.find(todo => todo.id === id);
        setTodoList(newList);
        if(removedTodo.complete){
            setCompletedTaskCount(prevNum => prevNum - 1);
        }
    }

    return (
        <div className='flex justify-between items-center w-full py-3
        border-b-2 border-gray-700'>
            <div className='flex items-center gap-x-3 text-lg'>
                <input type="checkbox" checked={complete} onChange={handleComplete}/>
                <p className={`text-sm 2xs:text-base xs:text-lg 
                ${complete ? "text-green-800 line-through decoration-2 decoration-green-800" : "text-slate-200"}`}>
                    {task}
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
                <MdOutlineLibraryAddCheck 
                className={`text-lg xs:text-2xl ${complete ? "opacity-100 text-green-600" : "opacity-10 text-slate-200"}`}/>
                <FaTrash className=' text-slate-200 cursor-pointer hover:text-cyan-600
                text-lg xs:text-xl'
                onClick={handleRemove}/>
            </div>
        </div>
    );
};

export default Todo;