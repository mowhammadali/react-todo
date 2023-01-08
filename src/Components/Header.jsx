import React, { useEffect, useState } from 'react';

const Header = () => {

    const [time , setTime] = useState(new Date());
    const nameOfMonth = time.toLocaleString('default', {
        month: 'long',
    });

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    } , [])

    return (
        <div className={`header ${time.getHours() > 4 && time.getHours() < 12 && "morning"} 
        ${time.getHours() > 11 && time.getHours() < 17 && "midday"}
        ${time.getHours() > 16 && time.getHours() < 20 && "evening"}
        ${time.getHours() > 19 && "night"}
        w-full px-6 py-3 rounded-t-xl xs:py-6`}>
            <h1 className='text-white text-xl xs:text-2xl'>{time.getFullYear()} , {time.getDate()} {nameOfMonth}</h1>
            <p className='text-white'>{time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()} : 
            {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} : 
            {time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}
            </p>
        </div>
    );
};

export default Header;