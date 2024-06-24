import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import '../MainPage/EBooksMainPage.css'
import { useStoreType } from '../../hooks/useStoreType';
import { useBookDetail } from '../../hooks/useBookDetail';

const BookDetail = () =>{
    
    const {selectedBookId,selectedBookDetail} = useStoreType((state) => state.eBookDetail);
    useBookDetail(selectedBookId!)
    console.log('## Detail', selectedBookDetail);
    

    const navigate = useNavigate()

    const backHandler = () => navigate(`/`)

    
    return (
        <div className='wrapper'>
        <h1>books</h1>
            <button onClick={backHandler}>BACK</button>
        {/* {books && books.map((topic: IBooks) => {
            return (
                <div key={topic.id} className='card' >
                    <img className="img" src={topic.volumeInfo.imageLinks ? topic.volumeInfo.imageLinks.smallThumbnail :
                    ''
                    } alt={topic.id} />
                    <h1>{topic.volumeInfo.categories}</h1>
                </div>
            )
        }
        )} */}
        </div>
     )
 }

 export default BookDetail