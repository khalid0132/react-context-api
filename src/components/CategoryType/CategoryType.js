import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryType = () => {
    const [catType] = useContext(CategoryContext)
    return (
        <div style ={{border: '2px solid blue'}}>
            <p>CategoryType, grand grand son of APP</p>
            <p>CatType: {catType}</p>
        </div>
    );
};

export default CategoryType;