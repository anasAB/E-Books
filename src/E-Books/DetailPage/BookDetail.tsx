import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './bookDetail.css'
import { useStoreType } from '../../hooks/useStoreType';
import { useBookDetail } from '../../hooks/useBookDetail';
import { updateSelectedBookIdState } from '../Slicer/eBookDetialSlice';
import { GiWhiteBook } from "react-icons/gi";
import { calculateSavings } from '../../utils/ebookActions';
import Button from '@mui/material/Button';

const BookDetail = () => {
    const dispatch = useDispatch()

    const { selectedBookId, selectedBookDetail } = useStoreType((state) => state.eBookDetail);

    useBookDetail(selectedBookId!)

    if(!selectedBookDetail) return null

    const closeHandler = () => dispatch(updateSelectedBookIdState(null))

 


    console.log('##selectedBookDetail',selectedBookDetail);
    
    return (
        <div>

            <div className='top'>
                <div className=''>
                    <img className='card-picture-img' src={selectedBookDetail.volumeInfo.imageLinks.smallThumbnail} alt={selectedBookDetail.volumeInfo.subtitle} />
                </div>

                <div className='top_info'>
                        <span className='title'>{selectedBookDetail.volumeInfo.title}</span>
                      
                        <span>Published On: {selectedBookDetail.volumeInfo.publishedDate}</span>
                        <span>Publisher: {selectedBookDetail.volumeInfo.publisher} </span>
                        <span>Page Count: {selectedBookDetail.volumeInfo.pageCount} </span>
                        {selectedBookDetail.saleInfo.offers && `Discount:` + calculateSavings(selectedBookDetail.saleInfo?.offers[0].listPrice.amountInMicros, selectedBookDetail.saleInfo.offers[0].retailPrice.amountInMicros)}
                
                </div>

                {/* <div className='book_info'>
                    
                    <span>description:{selectedBookDetail.volumeInfo.description}</span>
                </div>
                <div className=''>
                    <span>{selectedBookDetail.saleInfo.isEbook && <a target="_blank" rel="noopener noreferrer" href={selectedBookDetail.saleInfo.buyLink}> <GiWhiteBook color='green'/></a>}</span>

                </div> */}
            </div>

            <div className='footer'>

            </div>
            <Button variant="contained">Hello world</Button>;
            <button className='card-button' onClick={closeHandler}>BACK</button>
    </div>

    )
}

export default BookDetail