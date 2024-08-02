import { useDispatch } from 'react-redux'
import './header.css'
import { useStoreType } from '../../hooks/useStoreType';
import { BsCart } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { updateShowFavoveritBooks } from '../Slicer/EBooksSlice';


const Header = () => {

  const dispatch = useDispatch()
  const { showFavoveritBooks, favoveritBooks } = useStoreType((state) => state.eBooks);
  const { bookCart } = useStoreType((state) => state.bookCart);


  const showFavoverit = () => dispatch(updateShowFavoveritBooks())


  return (
    <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a onClick={showFavoverit} href="#contact"> {favoveritBooks.length > 0 ? "Show Favoverit" : "Show All"}</a>
        <a href="#about">About</a>
        <a className="active" href="#home"> {
          bookCart.length === 0 ?
            <BsCart /> :
            <div className='cart_container'>
              <FaCartShopping />
              {bookCart.length}
            </div>
        }
        </a>
      </div>
    </div>
  )
}

export default Header