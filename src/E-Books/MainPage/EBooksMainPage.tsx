import './EBooksMainPage.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useStoreType } from '../../hooks/useStoreType';
import { useBooks } from '../../hooks/useBooks';
import { BookObject } from '../../types/books';
import { updateSelectedBookIdState } from '../Slicer/eBookDetialSlice';

import { FcLike, } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { updateBookSlicerState, updateFavoveritBooksList } from '../Slicer/eBooksSlice';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { updateBookCart } from '../Slicer/cartSlice';
import { Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { BsFillCartDashFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";


const EBooksMainPage = () => {

    const { bookCart } = useStoreType((state) => state.bookCart);
    const { category, ebooks, favoveritBooks, showFavoveritBooks } = useStoreType((state) => state.eBooks);


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isDataLoading } = useBooks()

    // Will update the eBooks slicer to favoverit Books
    useEffect(() => {
         dispatch(updateBookSlicerState(favoveritBooks))
        }
    ,[showFavoveritBooks])


    const handleSelectedBook = (selectedBookId: string) => {
        dispatch(updateSelectedBookIdState(selectedBookId))
        navigate(`/BookDetail`)
    }


    const bookFavoveritHandler = (bookId: BookObject) => dispatch(updateFavoveritBooksList(bookId)) ;

    const addToBookCart = (book:BookObject) => dispatch(updateBookCart(book))
    

    const calculateStarHandler = (averageRating: number) => {
        const fullStars = Math.floor(averageRating);
        const halfStars = averageRating % 1 > 0 ? 1 : 0;

        return (
            <>
                {[...Array(fullStars + halfStars)].map((_, index) => (
                    <Fragment key={Math.random()}>
                        {index < fullStars ? (
                            <FaStar key={index} color="gold" />
                        ) : (
                            <FaStarHalfAlt key={index} color="gold" />
                        )}
                    </Fragment>
                ))}

                {[...Array(5 - fullStars - halfStars)].map((_, index) => (
                    <FaRegStar key={index} color="gold" />
                ))}
            </>
        );
    };

    const checkIfBookInCart = (id:string) => {
        const findBook = bookCart.find(item => item.id === id)

        if(findBook) {
            return <BsFillCartDashFill style={{color:"red"}}/>
        }
        return <BsFillCartPlusFill/>
    }

    
    const checkIfBookInFavoverit = (id:string) => {
        const findBook = favoveritBooks.find(item => item.id === id)

        if(findBook) {
            return <FcLike size="1.2em" />
        }
        return <CiHeart color="blue" aria-level={2} />
    }
    
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
                                <p className='card__heart' onClick={() => bookFavoveritHandler(book)}>
                                   {checkIfBookInFavoverit(book.id)}
                                </p>
                            </div>
                        </div>

                        <div className="card__details">
                            <div className='card__stars_category'>
                                <div> {book.volumeInfo.categories?.map(category => (<span className="tag" key={category}> {category} </span>))} </div>
                                <div> {calculateStarHandler(book.volumeInfo.averageRating)} </div>
                            </div>


                            <p className="card__title">{book.volumeInfo.title}</p>
                            <div className='book-description'>
                                {book.volumeInfo.authors.map((author, index) => {
                                    const lastAuthor = index === book.volumeInfo.authors.length - 1;
                                    return (
                                        <span className="card__by" key={author}>
                                            <a href="#" className="card__author" title="author">{author}</a>
                                            {!lastAuthor && <a href="#" className="card__author" title="author">&amp;</a>}
                                        </span>
                                    )
                                })}
                            </div>
                           

                        </div>

                        <div className='card__footer'>
                            <button onClick={() => handleSelectedBook(book.id)}> Read more </button>
                            <button onClick={() => addToBookCart(book)}>{checkIfBookInCart(book.id)}</button>
                        </div>
                    </div>

                )
            }
            )}
        </div>
    )
}

export default EBooksMainPage


