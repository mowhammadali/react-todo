import React , {useContext} from 'react';

// import context
import { TodoContext } from '../Contexts/TodoProvider';

// components
import Todo from './Todo';

const Todos = () => {
    const {todoList} = useContext(TodoContext);
    return (
        <div className='flex flex-col items-center gap-y-4 w-full 
        h-[310px] px-6 py-5 bg-transparent overflow-y-auto xs:h-[340px]'>
            {todoList.map(todo => <Todo key={todo.id} {...todo}/>)}
        </div>
    );
};

export default Todos;