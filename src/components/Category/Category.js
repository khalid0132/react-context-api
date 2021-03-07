import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Category = () => {
    const [cat] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is a Category, son of Header: {cat}</h3>
            <CategoryDetail count={cat}></CategoryDetail>
        </div>
    );
};

export default Category;