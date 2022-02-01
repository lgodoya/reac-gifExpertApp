
import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/gifGrid';


export const GifExpertApp = () => {

  //const categories = ['one Punch', 'samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['one Punch']);

  /* const handleAdd = () => {
   setCategories([...categories,'HunterXhunter']);
   
  } */



  return (
    <>
      <h2>GifExpertApp  </h2>
      <AddCategory setCategories={setCategories} />  {/* mandamos las categorias para poder verlas desde AddCategories */}
      <hr />

      {/*  <button onClick={handleAdd} >Agregar</button> */}
      <ol>
        {
          categories.map(category => (
           
            <GifGrid 
            key ={category}
            category = {category} 
            
            />
            
            


          ))
        }

      </ol>

    </>
  )
};
