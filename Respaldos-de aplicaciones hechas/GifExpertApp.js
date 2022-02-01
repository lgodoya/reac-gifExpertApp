import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';

export const GifExpertApp = () => {

  //const categories = ['one Punch', 'samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['one Punch', 'samurai X', 'Dragon Ball']);

  /* const handleAdd = () => {
   setCategories([...categories,'HunterXhunter']);
   
  } */



  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />  {/* mandamos las categorias para poder verlas desde AddCategories */}
      <hr />

      {/*  <button onClick={handleAdd} >Agregar</button> */}
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>

          })
        }

      </ol>

    </>
  )
};
