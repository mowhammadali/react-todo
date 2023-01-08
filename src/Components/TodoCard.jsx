import React from 'react';

// components
import Header from './Header';
import Input from './Input';
import Todos from './Todos';
import Footer from './Footer';

const TodoCard = () => {
    return (
        <div className='w-full bg-[#ffffff10] 
        mx-auto backdrop-blur-md rounded-xl md:w-[600px] xs:w-[500px]'>
            <Header />
            <Input />
            <Todos />
            <Footer />
        </div>
    );
};

export default TodoCard;