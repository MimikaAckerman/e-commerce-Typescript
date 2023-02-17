import { CartItemType } from '../App';
import { Wrapper } from './CartItem.styles';


type Props ={
    item:CartItemType;
    addToCart:(clickedItem:CartItemType) => void;
    removeFromCart:(id:number) => void;
};

const CartItem: React.FC<Props> = ({item,addToCart,removeFromCart}) =>(
<Wrapper>
    <div>
        <h3>{item.title}</h3>
        <div className="information">
            <p>Price: €{item.price}</p>
            <p>Total Products: €{(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">

        <button
          
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>


        <p>{item.amount}</p>
        <button
        
          onClick={() => addToCart(item)}
        >
          +
        </button>
        </div>
    </div>
    <img src={item.image} alt={item.title} />
</Wrapper>
)
export default CartItem









