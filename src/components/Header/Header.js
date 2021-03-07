import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Header = () => {
    // console.log(props)
    
    const [cat, setCat] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is Header, Siblings of Shop and Son of APP: {cat}</h1>
            <button onClick={()=>setCat(cat+1)}>Increase</button>
            <Category count={cat}></Category>
        </div>
    );
};

export default Header;