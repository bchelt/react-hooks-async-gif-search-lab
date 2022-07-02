import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
    const [url, setUrl] = useState('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=zkTq0Q8dQHcBsQfGdYOyd5jhtPczYaEh&rating=g')
    const [gifs, setGifs] = useState([])
    fetch(url)
    .then((res) => res.json())
    .then((message)=> setGifs([message.data[0].images.original.url, message.data[1].images.original.url, message.data[2].images.original.url]))
    
    function handleSubmit(input) {
        setUrl(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=zkTq0Q8dQHcBsQfGdYOyd5jhtPczYaEh&rating=g`)
    }

    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-xs-6'}>
                    <GifList gifs={gifs}/>
                </div>
                <div className={'col-xs-6'}>
                    <GifSearch handleSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default GifListContainer;