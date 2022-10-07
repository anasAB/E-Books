import { useEffect, useState } from 'react';
import './EBooksMainPage.css'
import { topics } from './Topics';
import { useDispatch, useSelector } from 'react-redux';
import { updateCatogry, updateBookSlicerState } from '../Slicer/EBooksSlice';
import { IBooks } from '../IState';
import { useNavigate } from 'react-router-dom'

const EBooksMainPage = () => {

    const [bookTopic, setBookTopic] = useState("");
    const [fetchingStatus, setFetchingStatus] = useState('');
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const bookCatgory = useSelector((state: any) => state.eBooks.Catogry)
    

    useEffect(()=>{
        const apiKey = "AIzaSyDqKVw0DNp2PpNE1_Rj1p77QB-uIfbndjw"
        if(bookTopic !== ''){
            setFetchingStatus('Loading');
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + bookTopic + "&key=" + apiKey + "&maxResults=40")
              .then(response => response.json())
              .then(data => dispatch(updateBookSlicerState(data.items)))
              .then(()=>setFetchingStatus('Success'))
              .catch(()=>setFetchingStatus('Error'));
            
        }
      }, [bookCatgory]);
    
    
    const handleSelectedBook = (selectedBook: string) => {
        setBookTopic(selectedBook);
        dispatch(updateCatogry(selectedBook))
        setTimeout(()=>{
            navigate(`/Books`)
        },800)
    }

    if(fetchingStatus === 'Loading'){
        return <h1>Loading....xxxx</h1>
    }

    return (
        <div className='wrapper'>
            {topics.map((topic: any) => {
                return (
                    <div key={topic.title} className='card' onClick={() => handleSelectedBook(topic.title)}>
                        <img className="img" src={topic.url} alt={topic.title} />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default EBooksMainPage
