import React, { useState } from 'react';
import  PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => { // constante para el evento de obtener lo que escribimos en el texbos
        //console.log(e.target.value)
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        {/* Evita que se vea el refrech en la pagina */ }
        e.preventDefault();
        //console.log('submit hecho')

        //validacion para set categories, que no se insetre el dato aunque no escribamos nada al darle enter

        if (inputValue.trim().length > 2) {
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }

    };

    return (

        <form onSubmit={handleSubmit}>  {/* Evita que se vea el refrech en la pagina */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}