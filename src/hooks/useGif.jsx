import { useEffect, useState } from 'react'

const url = `https://api.giphy.com/v1/gifs/random?api_key=x06EoCP79vejhHyJRA2qMhnlyBkU9cVp`;
export default function useGif(tag) {


    const [gif,setGif] = useState(null);
    const [loading,setLoading] = useState(true);
    
    async function fetchData(tag) {
        setLoading(true);

        try {
            let response = await fetch(tag ? `${url}&tag=${tag}` : `${url}`);
            let output = await response.json();
            setGif(output.data.images.downsized_large.url);
        }
        catch(error) {
            console.log("Network issue detected");
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData(tag);
    },[]);

    return {gif,loading,fetchData}

}
