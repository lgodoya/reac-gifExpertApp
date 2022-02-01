// los hooks no son mas que funciones

import { useEffect, useState } from "react"
import { getGifs } from '../componentes/helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                  
                    setstate({
                        data: imgs,
                        loading: false

                    })

            })
    }, [category])

    return state;

}