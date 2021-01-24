import { GameModel } from '../../models/Game';
import CartGame from '../CartGame/CartGame';

type Props = {
  cartGames: GameModel[];
  addToCart: (clickedItem: GameModel) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartGames, addToCart, removeFromCart }) => {
  return (
    <div>
<h2>Your Shopping Cart</h2>
      {cartGames.length === 0 ? <p>No Games in cart.</p> : null}
      {cartGames.map(game => (
        <CartGame
          key={game.id}
          game={game}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>

  );
};

export default Cart;