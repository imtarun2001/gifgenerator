import React, { useState } from 'react'
import Spinner from './Spinner';
import './TaggedGif.css';
import useGif from '../hooks/useGif';

export default function TaggedGif() {

    const [tag,setTag] = useState('');
    let {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='taggedgif'>
        <div className='agif'><b>A {tag} Gif</b></div>
        {
            loading ? <Spinner></Spinner> : <img src={gif} alt="" height="200px" className='gif'/>
        }
        <input type="text" name="tag" id="tag" onChange={(event) => {setTag(event.target.value)}} value={tag}/>
        <button onClick={() => fetchData(tag)} className='taggedgeneratebtn'><b>Generate</b></button>
    </div>
  )
}
