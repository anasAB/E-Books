import React from "react"
import './EBooksMainPage.css'
import { useDispatch } from 'react-redux';
import { useStoreType } from '../../hooks/useStoreType';
import { BookObject } from '../../types/books';
import { updateSelectedBookIdState } from '../Slicer/eBookDetialSlice';
import { FcLike, } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { updateBookCart } from '../Slicer/cartSlice';
import { Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { BsFillCartDashFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import Modal from '../../components/UI/Modal';
import BookDetail from '../DetailPage/BookDetail';
import { updateFavoveritBooksList,updateBookSlicerState } from '../Slicer/EBooksSlice';

const EBooksMainPage = () => {

    const { bookCart } = useStoreType((state) => state.bookCart);
    const { ebooks, favoveritBooks, showFavoveritBooks } = useStoreType((state) => state.eBooks);
    const { selectedBookId } = useStoreType((state) => state.eBookDetail);

    

    const dispatch = useDispatch()

    // Will update the eBooks slicer to favoverit Books
    useEffect(() => {
        dispatch(updateBookSlicerState(favoveritBooks))
    }, [showFavoveritBooks])


   


    const bookFavoveritHandler = (bookId: BookObject) => dispatch(updateFavoveritBooksList(bookId));

    const addToBookCart = (book: BookObject) => dispatch(updateBookCart(book))


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

    const checkIfBookInCart = (id: string) => {
        const findBook = bookCart.find(item => item.id === id)

        if (findBook) {
            return <BsFillCartDashFill style={{ color: "green" }} />
        }
        return <BsFillCartPlusFill />
    }


    const checkIfBookInFavoverit = (id: string) => {
        const findBook = favoveritBooks.find(item => item.id === id)

        if (findBook) {
            return <FcLike size="1em" />
        }
        return <CiHeart size="0.95em" color="blue" aria-level={2} />
    }

    const calculateSavings = (oldPrice: number, newDiscountedPrice: number) => {
        const difference = oldPrice - newDiscountedPrice;

        // Calculate the percentage savings
        const percentageSavings = (difference / oldPrice) * 100;
        // return  percentageSavings.toFixed(2) + '' + '%' ;
        let saveingType = ""
        if(percentageSavings > 0  && percentageSavings < 10) saveingType = "not-bad"
        if(percentageSavings > 10  && percentageSavings < 20) saveingType = "good"
        if(percentageSavings > 20  && percentageSavings < 30) saveingType = "very-good"

        return  <span className={`saving  ${saveingType}`}>{percentageSavings.toFixed(2) + '' + '%'} </span>;
    }

    const openPreviewLink = (linkUrl: string) => {
        window.open(linkUrl, '_blank', 'noopener,noreferrer,height=600,width=800');
    };

    const displayAuthors = (authors: string[]) => {
        return ( authors.length > 3 ? (
          (  <>
                {authors.slice(0, 3).map((author, index) => (
                        <span key={index}>
                            <span>{author}</span>
                            <span> {index !== 2 && <span title="author"> &amp; </span>}</span>
                        </span>
                    ))}
                ...
            </>)
        ) : (
             authors.map((author, index) => (
                <span key={index}>
                    <span>{author}</span>
                    {index !== authors.length - 1 && <span title="author"> &amp; </span>}
                </span>
            ))
        ))
    } 
    
    const opebBookDetials = (selectedBookId: string) => dispatch(updateSelectedBookIdState(selectedBookId))
    

    
    return (
        <div className='main_page'>
            <div className='main_filter'>FILTER</div>
            <div className='main_cards'>
                {ebooks && ebooks.map((book: BookObject) => {
                    return (
                        <div className='card1' key={book.id}>
                            <div className='a89c002b3e'>
                                <a href={book.volumeInfo.imageLinks.smallThumbnail}>
                                    <img className='card__img' src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.subtitle} /> </a>
                            </div>

                            <div className='card-info-right'>
                                <div className='card-info-header'>
                                    <div className='ac58e93660'>
                                        <div>
                                            <p className="daa8593c50"> {book.volumeInfo.title} </p>
                                        </div>

                                        <div className='lang_cat'>
                                            {book.volumeInfo.categories?.map(category => (<span className='category' key={category}> {category.toUpperCase()} </span>))}
                                        
                                            <p className='card__heart' onClick={() => bookFavoveritHandler(book)}>
                                                {checkIfBookInFavoverit(book.id)}
                                            </p>
                                            
                                        </div>
                                    </div>

                                    <div className='right_header'>
                                        <div className='reviews'>
                                            <span className='ratingsCount'> {book.volumeInfo.ratingsCount} reviews</span>
                                            <span className='averageRating'> {book.volumeInfo.averageRating}</span>
                                        </div>
                                        <div>
                                        <span> {calculateStarHandler(book.volumeInfo.averageRating)} </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='card-footer'>
                                    <div className='card-info'>
                                        <p>{book.volumeInfo.publishedDate}</p>
                                        <div className='authors'>{displayAuthors(book.volumeInfo.authors)}</div>
                                        
                                    </div>
                                        {book.saleInfo.offers && 
                                        <div className='card-price'>
                                        <div>
                                            <span className="offer_price">{ book.saleInfo.offers[0].listPrice.currencyCode}&nbsp;{book.saleInfo.offers[0].listPrice.amountInMicros}</span>
                                            <span>
                                                    {book.saleInfo.offers[0].retailPrice.currencyCode}&nbsp;{book.saleInfo.offers[0].retailPrice.amountInMicros}
                                            </span>
                                        </div>
                                        { calculateSavings(book.saleInfo.offers[0].listPrice.amountInMicros, book.saleInfo.offers[0].retailPrice.amountInMicros)}
                                    </div>
                                        }
                                  
                                </div>

                                <div className='action_buttons'>
                                        <button className='preview_book' onClick={() => openPreviewLink(book.accessInfo.webReaderLink)}> {book.accessInfo.viewability === "PARTIAL" ? "Review some Pages": "Review All Pages"}  </button>
                                        <button className='detial_button' onClick={() => opebBookDetials(book.id)}> Book Detials </button>
                                        <button className='preview_book' onClick={() => addToBookCart(book)}>{checkIfBookInCart(book.id)}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {selectedBookId && (
            <Modal>
                <BookDetail />
            </Modal>
            )}
            
        </div>
    )
}

export default EBooksMainPage
