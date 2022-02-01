import React from 'react';
import { useFetchGifs } from '../hooks/usefetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data: images } = useFetchGifs(category);

    return (

        <>
            <h3>{category}</h3>
            

            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />
                    ))
                }

            </div>
        </>
    )
};
