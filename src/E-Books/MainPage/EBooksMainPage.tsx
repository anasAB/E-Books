import React, { Fragment } from 'react'
import './EBooksMainPage.css'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import CardMedia from '@mui/material/CardMedia'

import MoreVertIcon from '@mui/icons-material/MoreVert'

const EBooksMainPage = () => {
  return (
    <Fragment>
      <Card sx={{ maxWidth: 645 }}>
        <CardHeader
          className="tes"
          subheader="September 14, 2016"
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia alt="Paella dish" component="img" image="/static/images/cards/paella.jpg" height="194" />
        <CardContent>
          <Typography color="text.secondary" variant="body2">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export { EBooksMainPage }

// const { bookCart } = useStoreType((state) => state.bookCart);
// const { ebooks, favoveritBooks, showFavoveritBooks } = useStoreType((state) => state.eBooks);
// const { selectedBookId } = useStoreType((state) => state.eBookDetail);

// const theme = useTheme();

// const dispatch = useDispatch()
// const { isDataLoading } = useBooks()

// Will update the eBooks slicer to favoverit Books
// useEffect(() => {
//     dispatch(updateBookSlicerState(favoveritBooks))
// }, [showFavoveritBooks])

// const bookFavoveritHandler = (bookId: BookObject) => dispatch(updateFavoveritBooksList(bookId));

// const addToBookCart = (book: BookObject) => dispatch(updateBookCart(book))

// const calculateStarHandler = (averageRating: number) => {
//     const fullStars = Math.floor(averageRating);
//     const halfStars = averageRating % 1 > 0 ? 1 : 0;

//     return (
//         <>
//             {[...Array(fullStars + halfStars)].map((_, index) => (
//                 <Fragment key={Math.random()}>
//                     {index < fullStars ? (
//                         <FaStar key={index} color="gold" />
//                     ) : (
//                         <FaStarHalfAlt key={index} color="gold" />
//                     )}
//                 </Fragment>
//             ))}

//             {[...Array(5 - fullStars - halfStars)].map((_, index) => (
//                 <FaRegStar key={index} color="gold" />
//             ))}
//         </>
//     );
// };

// const checkIfBookInCart = (id: string) => {
//     const findBook = bookCart.find(item => item.id === id)

//     if (findBook) {
//         return <BsFillCartDashFill style={{ color: "green" }} />
//     }
//     return <BsFillCartPlusFill />
// }

// const checkIfBookInFavoverit = (id: string) => {
//     const findBook = favoveritBooks.find(item => item.id === id)

//     if (findBook) {
//         return <FcLike size="1em" />
//     }
//     return <CiHeart size="0.95em" color="blue" aria-level={2} />
// }

// const calculateSavings = (oldPrice: number, newDiscountedPrice: number) => {
//     const difference = oldPrice - newDiscountedPrice;

//     // Calculate the percentage savings
//     const percentageSavings = (difference / oldPrice) * 100;
//     // return  percentageSavings.toFixed(2) + '' + '%' ;
//     let saveingType = ""
//     if (percentageSavings > 0 && percentageSavings < 10) saveingType = "not-bad"
//     if (percentageSavings > 10 && percentageSavings < 20) saveingType = "good"
//     if (percentageSavings > 20 && percentageSavings < 30) saveingType = "very-good"

//     return <span className={`saving  ${saveingType}`}>{percentageSavings.toFixed(2) + '' + '%'} </span>;
// }

// const openPreviewLink = (linkUrl: string) => {
//     window.open(linkUrl, '_blank', 'noopener,noreferrer,height=600,width=800');
// };

// const displayAuthors = (authors: string[]) => {
//     return (authors.length > 3 ? (
//         (<>
//             {authors.slice(0, 3).map((author, index) => (
//                 <span key={index}>
//                     <span>{author}</span>
//                     <span> {index !== 2 && <span title="author"> &amp; </span>}</span>
//                 </span>
//             ))}
//             ...
//         </>)
//     ) : (
//         authors.map((author, index) => (
//             <span key={index}>
//                 <span>{author}</span>
//                 {index !== authors.length - 1 && <span title="author"> &amp; </span>}
//             </span>
//         ))
//     ))
// }

// const opebBookDetials = (selectedBookId: string) => dispatch(updateSelectedBookIdState(selectedBookId))

// return (
//     <div className='main_page'>
//         <div className='main_filter'>FILTER</div>
//         <div className='main_cards'>
//             {ebooks && ebooks.map((book: BookObject) => {
//                 return (
//                     <div className='card1' key={book.id}>
//                         <div className='a89c002b3e'>
//                             <a href={book.volumeInfo.imageLinks.smallThumbnail}>
//                                 <img className='card__img' src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.subtitle} /> </a>
//                         </div>

//                         <div className='card-info-right'>
//                             <div className='card-info-header'>
//                                 <div className='ac58e93660'>
//                                     <div>
//                                         <p className="daa8593c50"> {book.volumeInfo.title} </p>
//                                     </div>

//                                     <div className='lang_cat'>
//                                         {book.volumeInfo.categories?.map(category => (<span className='category' key={category}> {category.toUpperCase()} </span>))}

//                                         <p className='card__heart' onClick={() => bookFavoveritHandler(book)}>
//                                             {checkIfBookInFavoverit(book.id)}
//                                         </p>

//                                     </div>
//                                 </div>

//                                 <div className='right_header'>
//                                     <div className='reviews'>
//                                         <span className='ratingsCount'> {book.volumeInfo.ratingsCount} reviews</span>
//                                         <span className='averageRating'> {book.volumeInfo.averageRating}</span>
//                                     </div>
//                                     <div>
//                                         <span> {calculateStarHandler(book.volumeInfo.averageRating)} </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='card-footer'>
//                                 <div className='card-info'>
//                                     <p>{book.volumeInfo.publishedDate}</p>
//                                     <div className='authors'>{displayAuthors(book.volumeInfo.authors)}</div>

//                                 </div>
//                                 {book.saleInfo.offers &&
//                                     <div className='card-price'>
//                                         <div>
//                                             <span className="offer_price">{book.saleInfo.offers[0].listPrice.currencyCode}&nbsp;{book.saleInfo.offers[0].listPrice.amountInMicros}</span>
//                                             <span>
//                                                 {book.saleInfo.offers[0].retailPrice.currencyCode}&nbsp;{book.saleInfo.offers[0].retailPrice.amountInMicros}
//                                             </span>
//                                         </div>
//                                         {calculateSavings(book.saleInfo.offers[0].listPrice.amountInMicros, book.saleInfo.offers[0].retailPrice.amountInMicros)}
//                                     </div>
//                                 }

//                             </div>

//                             <div className='action_buttons'>
//                                 <button className='preview_book' onClick={() => openPreviewLink(book.accessInfo.webReaderLink)}> {book.accessInfo.viewability === "PARTIAL" ? "Review some Pages" : "Review All Pages"}  </button>
//                                 <button className='detial_button' onClick={() => opebBookDetials(book.id)}> Book Detials </button>
//                                 <button className='preview_book' onClick={() => addToBookCart(book)}>{checkIfBookInCart(book.id)}</button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//         {selectedBookId && (
//             <Modal>
//                 <BookDetail />
//             </Modal>
//         )}

//     </div>
// )
