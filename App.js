import './App.css';
import React, {useState, useEffect} from 'react';



function App () {
    const [quote, setQuote] = useState('test')
    const [author, setAuthor] =useState('empty')

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {

            setQuote(data.content)
            setAuthor(data.author)
        },)
    },[])
}

return (
<>
<h1>Random Quote Generator</h1>
<p>quote: {quote}</p>
<h2>author: {author}</h2>

</>
)