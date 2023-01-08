import React , { createContext , useState , useEffect} from 'react';

// export context
export const TodoContext = createContext();

const TodoProvider = ({children}) => {

    const [todoList , setTodoList] = useState(
        JSON.parse(localStorage.getItem('todos')) || []);
    const [completedTaskCount , setCompletedTaskCount] = useState(
        JSON.parse(localStorage.getItem('completedCount')) || 0);
    const [input , setInput] = useState('');

     // use effect
     useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todoList));
    } , [todoList])

    useEffect(() => {
        localStorage.setItem('completedCount' , JSON.stringify(completedTaskCount));
    } , [completedTaskCount])

    return (
        <TodoContext.Provider value={{todoList , setTodoList , 
        input , setInput , completedTaskCount , setCompletedTaskCount}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;