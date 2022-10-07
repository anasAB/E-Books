import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { IInitialState } from '../Slicer/EBooksSlice';
import { useNavigate } from 'react-router-dom'
import './EBooksMainPage.css'
import { IBooks } from '../IState';

const Books = () =>{
    const books = useSelector((state:any) => state.eBooks.Books)

    const navigate = useNavigate()
    console.log('###BOOKS',books);
    
    useEffect(()=>{
        if(books.length === 0){
            backHandler()
        }
    },[books])

    const backHandler = () => navigate(`/`)

    // const test = books.map((item:IBooks) => console.log('#####ITEM',item))
    // console.log('test',test);
    
    return (
        <div className='wrapper'>
            <button onClick={backHandler}>BACK</button>
        {books && books.map((topic: IBooks) => {
            return (
                <div key={topic.id} className='card' >
                    <img className="img" src={topic.volumeInfo.imageLinks ? topic.volumeInfo.imageLinks.smallThumbnail :
                    ''
                    } alt={topic.id} />
                    <h1>{topic.volumeInfo.categories}</h1>
                </div>
            )
        }
        )}
        </div>
     )
 }

 export default Books