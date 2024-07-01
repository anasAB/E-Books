import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { updateLoadingDataStatus } from "../E-Books/Slicer/eBooksSlice";
import { db } from "../config/firebase";
import { updateBookDetialSlicerState } from "../E-Books/Slicer/eBookDetialSlice";



export const useBookDetail = (bookId: string) => {

    
    const dispatch = useDispatch()

    const getData = async () => {
        dispatch(updateLoadingDataStatus(true));
        // Adjusted to use doc() and getDoc() for fetching a single document by ID
        const docRef = doc(db, "ebooks", bookId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const serializablePayload = {
                id: docSnap.id,
               ...docSnap.data(),
            };    
            dispatch(updateBookDetialSlicerState(serializablePayload));
        } else {
            console.log("No such document!");
        }
    
        dispatch(updateLoadingDataStatus(false));
    };
    



    useEffect(() => {
        console.log('### BookDetail UseEffect');

        getData();
    }, []);
}


