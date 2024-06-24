import './EBooksMainPage.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useStoreType } from '../../hooks/useStoreType';
import { useBooks } from '../../hooks/useBooks';
import { BookObject } from '../../types/books';
import { updateSelectedBookIdState } from '../Slicer/eBookDetialSlice';

import { FcLike, } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { updateFavoveritBooksList } from '../Slicer/eBooksSlice';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const EBooksMainPage = () => {

    const { category, ebooks, favoveritBooksId } = useStoreType((state) => state.eBooks);

    console.log('## Store', ebooks);


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isDataLoading } = useBooks()


    const handleSelectedBook = (selectedBookId: string) => {
        dispatch(updateSelectedBookIdState(selectedBookId))
        navigate(`/BookDetail`)
    }


    const bookFavoveritHandler = (bookId: string) => dispatch(updateFavoveritBooksList(bookId));



    const calculateStarHandler = (averageRating: number) => {
        const fullStars = Math.floor(averageRating);
        const halfStars = averageRating % 1 > 0 ? 1 : 0;

        return (
            <>
                {[...Array(fullStars + halfStars)].map((_, index) => (
                    <>
                        {index < fullStars ? (
                            <FaStar key={index} color="gold" />
                        ) : (
                            <FaStarHalfAlt key={index} color="gold" />
                        )}
                    </>
                ))}

                {[...Array(5 - fullStars - halfStars)].map((_, index) => (
                    <FaRegStar key={index} color="gold" />
                ))}
            </>
        );
    };

    return (

        <div className='card__container'>
            {ebooks && ebooks.map((book: BookObject) => {
                return (
                    <div className="card" key={book.id}>

                        <div className='card__side__details'>
                            <div className='card__img__container'>
                                <img className='card__img' src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.subtitle} />
                            </div>

                            <div className="card__heart-info" >
                                <p className='card__heart' onClick={() => bookFavoveritHandler(book.id)}>{favoveritBooksId.includes(book.id) ? <FcLike size="1.2em" /> : <CiHeart color="blue" aria-level={2} />}</p>
                            </div>
                        </div>

                        <div className="card__details">
                            <div className='card__stars_category'>
                                <div> {book.volumeInfo.categories?.map(category => (<span className="tag" key={category}> {category} </span>))} </div>
                                <div> {calculateStarHandler(book.volumeInfo.averageRating)} </div>
                            </div>


                            <h3 className="card__title">{book.volumeInfo.title}</h3>
                            {book.volumeInfo.authors.map((author, index) => {
                                const lastAuthor = index === book.volumeInfo.authors.length - 1;

                                return (
                                    <span className="card__by" key={author}>
                                        <a href="#" className="card__author" title="author">{author}</a>
                                        {!lastAuthor && <a href="#" className="card__author" title="author">&amp;</a>}
                                    </span>

                                )
                            })}
                            {/* <p className='book-description'>{book.volumeInfo.description}</p> */}
                          
                        </div>
                        <div className='card__footer'>
                            <button onClick={() => handleSelectedBook(book.id)}>Read more</button>

                            </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default EBooksMainPage


