import { CartItemType } from "../App";
import { Wrapper } from "./Item.style";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>€{item.price}</h3>
    </div>
    <button onClick={() => handleAddToCart(item)}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="2"
          d="M12,18 L12,6 M6,12 L18,12"
        ></path>
      </svg>
    </button>
  </Wrapper>
);
export default Item;
