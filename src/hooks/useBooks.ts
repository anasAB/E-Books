import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDocs, collection } from 'firebase/firestore'
import { updateBookSlicerState, updateLoadingDataStatus } from '../E-Books/Slicer/eBooksSlice'
import { db } from '../config/firebase'
import { useStoreType } from './useStoreType'

export const useBooks = () => {
  const dispatch = useDispatch()
  const [isDataLoading, setIsDataLoading] = useState(false)
  const { showFavoveritBooks } = useStoreType((state) => state.eBooks)

  // const database = db.database();

  // INFO this method will push our DummyData to our firebase
  // const seedData = async () => {
  //     for (const event of sampleData) {
  //         const {id,...rest} = event;
  //         await setDoc(doc(db, 'ebooks', id as string), {
  //            ...rest
  //         });
  //     }
  // };

  const getData = async () => {
    dispatch(updateLoadingDataStatus(true))
    const querySnapshot = await getDocs(collection(db, 'ebooks'))
    const serializablePayload = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data() // Spread the document data here if needed
    }))
    dispatch(updateBookSlicerState(serializablePayload))
    dispatch(updateLoadingDataStatus(false))
    setIsDataLoading(false)
  }

  useEffect(() => {
    if (showFavoveritBooks) return

    getData()
    // seedData()
  }, [showFavoveritBooks])

  return { isDataLoading }
}
