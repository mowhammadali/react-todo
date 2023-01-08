import React , { useContext , useRef , useEffect} from 'react';
import { v4 } from 'uuid';

// icons
import { MdNoteAdd } from 'react-icons/md';

// import context
import { TodoContext } from '../Contexts/TodoProvider';

const Input = () => {
    // use context
    const {todoList , setTodoList , input , setInput} = useContext(TodoContext);

    // use ref
    const inputRef = useRef(null);

    // handle click
    const handleClick = () => {
        if(input){
            const todoId = v4();
            setTodoList([
                ...todoList ,
                {
                    task: input,
                    complete: false,
                    id: todoId,
                }
            ]);
            setInput("");
        }
        else{
            window.alert('لطفا مقداری را وارد کنید.')
        }
    }

    // handle key code
    const handleKeyPress = e => {
        e.keyCode === 13 && handleClick();
    }
     
    // use effect
    useEffect(() => {
        inputRef.current.focus();
    } , [])

    return (
        <div className='relative w-full px-6 bg-slate-100'>
            <input className='w-full h-[45px] py-4 text-sm
            outline-none bg-transparent xs:text-base xs:py-8'
            placeholder='آیتم خود را اضافه کنید'
            type='text'
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyUp={handleKeyPress}/>
            <MdNoteAdd className='absolute top-[50%] left-8
            cursor-pointer text-gray-500 text-xl translate-y-[-50%]
            hover:text-cyan-600 xs:text-3xl'
            onClick={handleClick}/>
        </div>
    );
};

export default Input;