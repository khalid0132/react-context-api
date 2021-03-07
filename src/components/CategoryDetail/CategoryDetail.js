import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryType from '../CategoryType/CategoryType';

const CategoryDetail = () => {
    const [catty, setCatty] = useContext(CategoryContext);
  
    return (
        <div style ={{border: '4px solid red'}}>
            <h5>This is category detail, son of category: {catty}</h5>
            <h6>Used (CreatContext and useContext) data got from grandfather::: {catty}</h6>
            <button onClick={()=>setCatty(catty-1)}>Reduce value</button>
            <CategoryType></CategoryType>
        </div>
    );
};

export default CategoryDetail;