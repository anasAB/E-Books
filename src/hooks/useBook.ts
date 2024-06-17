import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookSlicerState } from "../E-Books/Slicer/EBooksSlice";


export const useBooks = (bookCategory: string) =>{
    const dispatch = useDispatch()
    const [fetchingStatus, setFetchingStatus] = useState('');
    

        
    useEffect(()=>{
        const apiKey = "AIzaSyDqKVw0DNp2PpNE1_Rj1p77QB-uIfbndjw"
        if(bookCategory !== ''){
            setFetchingStatus('Loading');
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookCategory}&key=${apiKey}&maxResults=40`)
              .then(response => response.json())
              .then(data => dispatch(updateBookSlicerState(data.items)))
              .then(()=>setFetchingStatus('Success'))
              .catch((error)=> {
                console.error('There has been a problem with your fetch operation:', error);
                setFetchingStatus('Error')});
            
        }
      }, [bookCategory]);
    
      return {fetchingStatus}
}