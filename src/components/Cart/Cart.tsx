import { GameModel } from '../../models/Game';
import CartGame from '../CartGame/CartGame';

type Props = {
  cartGames: GameModel[];
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartGames, removeFromCart }) => {
  return (
    <div className='cart'>
      <h2>Your Bets</h2>
      {cartGames.length === 0 ? <p>No Bets selected.</p> : null}
      {cartGames.map((game) => (
        <CartGame key={game.id} game={game} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
