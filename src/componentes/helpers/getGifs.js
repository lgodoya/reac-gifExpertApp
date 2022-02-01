

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=IHH8EBmkKlWCjRJij86iRRM5tcwPHyRi&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //usamos la condicion o el sgno de interrogacion 
            //para preguntar que si vienen las imagenes entonces lo utilize
        }
    })

    return gifts;

}