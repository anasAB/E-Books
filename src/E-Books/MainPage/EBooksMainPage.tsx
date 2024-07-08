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

    const calculateSavings = (oldPrice: number, newDiscountedPrice: number) => {
          // Calculate the difference between the old price and the new discounted price
        const difference = oldPrice - newDiscountedPrice;
        
        // Calculate the percentage savings
        const percentageSavings = (difference / oldPrice) * 100;
        
        return percentageSavings;
    }
    
    return (
        <div className='main_page'>
            <div className='main_filter'>FILTER</div>
            <div className='main_cards'>
            {ebooks && ebooks.map((book: BookObject) => {
                return (
                    <div className='card1'>
                    {/* <div className='property_card_container'></div> */}
                    <div className='a89c002b3e'>
                        <a href={book.volumeInfo.imageLinks.smallThumbnail}>
                            <img className='card__img' src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.subtitle} /> </a>
                    </div>

                    <div className='card-info-right'>
                        <div className='header'>
                            <div className='ac58e93660'>
                                <p className="daa8593c50"> {book.volumeInfo.title} </p>
                                
                                <span > {calculateStarHandler(book.volumeInfo.averageRating)} </span>
                                <div className='language_tag'><span> {book.volumeInfo.language.toUpperCase()} </span></div>
                                <div className='tag'> {book.volumeInfo.categories?.map(category => (<span  key={category}> {category} </span>))} </div>
                            </div>

                            <div className='right_header'>
                                <div className='averageRating'> {book.volumeInfo.averageRating}</div>
                                <div className='ratingsCount'> {book.volumeInfo.ratingsCount} reviews</div>
                                
                            </div>
                           
                        </div>

                        <div>
                            <a href={book.volumeInfo.previewLink}>previewLink</a>
                            <div className='card-footer'>
                                <div className='card-info' style={{backgroundColor:"blue"}}>info</div>
                                <div className='card-price'>
                                <span className="c780541967">{book.saleInfo.offers && book.saleInfo.offers[0].listPrice.currencyCode}&nbsp;{book.saleInfo.offers && book.saleInfo.offers[0].listPrice.amountInMicros}</span>
                                <div className="f53c51ec80 e8f82081af">
                                    <span className="f53c51ec80">
                                        {book.saleInfo.offers && book.saleInfo.offers[0].retailPrice.currencyCode}&nbsp;{book.saleInfo.offers && book.saleInfo.offers[0].retailPrice.amountInMicros}
                                    </span>
                                </div>
                                {book.saleInfo.offers && calculateSavings(book.saleInfo.offers[0].listPrice.amountInMicros, book.saleInfo.offers[0].retailPrice.amountInMicros)}
                                </div>
                                
                                {/* <div className='card-price'>{book.saleInfo?.offers}</div>
                                <div className='card-price'>{book.saleInfo?.retailPrice}</div>
                                <div className='card-price'>{book.saleInfo.saleability}</div> */}
                            </div>
                        </div>
                    </div>
                  
                </div>
        
                )
            })}

            
          

            </div>
        </div>
        // <div className='card__container'>
        //     {ebooks && ebooks.map((book: BookObject) => {
        //         return (
        //             <div className="card" key={book.id}>

        //                 <div className='card__side__details'>
        //                     <div className='card__img__container'>
        //                         <img className='card__img' src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.subtitle} />
        //                     </div>

        //                     <div className="card__heart-info" >
        //                         <p className='card__heart' onClick={() => bookFavoveritHandler(book)}>
        //                            {checkIfBookInFavoverit(book.id)}
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className="card__details">
        //                     <div className='card__stars_category'>
                                // <div> {book.volumeInfo.categories?.map(category => (<span className="tag" key={category}> {category} </span>))} </div>
        //                         <div> {calculateStarHandler(book.volumeInfo.averageRating)} </div>
        //                     </div>


        //                     <p className="card__title">{book.volumeInfo.title}</p>
        //                     <div className='book-description'>
        //                         {book.volumeInfo.authors.map((author, index) => {
        //                             const lastAuthor = index === book.volumeInfo.authors.length - 1;
        //                             return (
        //                                 <span className="card__by" key={author}>
        //                                     <a href="#" className="card__author" title="author">{author}</a>
        //                                     {!lastAuthor && <a href="#" className="card__author" title="author">&amp;</a>}
        //                                 </span>
        //                             )
        //                         })}
        //                     </div>
                           

        //                 </div>

        //                 <div className='card__footer'>
        //                     <button onClick={() => handleSelectedBook(book.id)}> Read more </button>
        //                     <button onClick={() => addToBookCart(book)}>{checkIfBookInCart(book.id)}</button>
        //                 </div>
        //             </div>

        //         )
        //     }
        //     )}
        // </div>
    )
}

export default EBooksMainPage


