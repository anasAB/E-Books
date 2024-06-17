import './EBooksMainPage.css'
import { topics } from '../Topics';
import { useDispatch } from 'react-redux';
import { updateCategory, updateBookSlicerState } from '../Slicer/EBooksSlice';
import { useNavigate } from 'react-router-dom'
import { useStoreType } from '../../hooks/useStoreType';
import { useBooks } from '../../hooks/useBook';

const EBooksMainPage = () => {

    const bookCategory = useStoreType((state) => state.eBooks.Category);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {fetchingStatus} = useBooks(bookCategory)



    
    const handleSelectedBook = (selectedBook: string) => {
        dispatch(updateCategory(selectedBook))
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
