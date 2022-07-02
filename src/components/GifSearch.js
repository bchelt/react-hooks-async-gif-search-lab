import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
    const [input, setInput] = useState('')
    
    function change(e) {
        setInput(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(input);
    }

    return (
        <form>
            <label htmlFor={'search'}>Enter a Search Term:</label><br></br>
            <input type={'text'} id={'search'} name={'search'} value={input} onChange={change}/><br></br>
            <input type={'submit'} value={'Find Gifs'} onClick={onSubmit} className={'btn btn-success'}/>
        </form>
    )
}

export default GifSearch;