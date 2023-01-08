import React , { useContext } from 'react';

// import context
import { TodoContext } from '../Contexts/TodoProvider';

const Footer = () => {
    const {todoList , completedTaskCount} = useContext(TodoContext);
    return (
        <div className='flex justify-between items-center w-full px-6 py-2
        bg-slate-300 rounded-b-xl text-xs 2xs:text-sm xs:text-lg 2xs:py-3'>
            <p>کل: {todoList.length}</p>
            <p>انجام شده ها: {completedTaskCount}</p>
            <p>انجام نشده ها : {todoList.length - completedTaskCount}</p>
        </div>
    );
};

export default Footer;