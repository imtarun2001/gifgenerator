import React from 'react'
import Spinner from './Spinner';
import './RandomGif.css';
import useGif from '../hooks/useGif';

export default function RandomGif() {

    let {gif,loading,fetchData} = useGif();

  return (
    <div className='randomgif'>
        <div className='arandomgif'><b>A Random Gif</b></div>
        {
            loading ? <Spinner></Spinner> : <img src={gif} alt="" height="200px" className='gif'/>
        }
        <button onClick={() => {fetchData()}} className='randomgeneratebtn'><b>Generate</b></button>
    </div>
  )
}
