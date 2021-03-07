import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shop = (props) => {
    const [cat, setCat] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is Shop, siblings of Header and son of APP: {cat}</h1>
            <button onClick={()=>setCat(cat +1)}>Increasing the value </button>
        </div>
    );
};

export default Shop;