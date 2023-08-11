import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';



function App () {
    const [quote, setQuote] = useState('test')
    const [author, setAuthor] =useState('empty')

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {

            setQuote(data.content)
            setAuthor(data.author)
        },)
    },[])
}

return (
<>
<h1>{quote}</h1>
<h2>{author}</h2>

</>
)