import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { ShortenText } from "../helper/Helper";
import styles from "./Card.module.css"


const Card = ({data}) => {
 const {id , title , image , price} = data;


  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{width:"150px"}} />
      <h3>{ShortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}><TbListDetails /></Link>
        <div>
        <button><TbShoppingBag /></button>
        </div>            
      </div>              
    </div>
  )
}

export default Card