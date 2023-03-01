import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const[categories, setCategories] = useState(['Dragon Ball','Pokemon']);
    
    const onAddCategory = () =>{ 
        setCategories([...categories, 'superman']);
        //setCategories(cat => [...cat, 'superman'])
    }
    
    
    // console.log(categories);
    
    
return (
    <>
    {/*titulo*/}
    <h1>GifExpertApp</h1>
    {/*Input*/}
    <AddCategory setCategories={setCategories}/>
    {/*Listado de gif*/}
    <ol>
        {categories.map(category =>{
            return <li key={category}>{category}</li> 
            
            })}
        {/*Listado de Gif*/}
    </ol>

    {/*Gif item*/}
    </>
);
};
