import Button from '@material-ui/core/Button';
import { GameModel } from '../../models/Game';

type Props = {
  game: GameModel;
  addToCart: (clickedGame: GameModel) => void;
  removeFromCart: (id: number) => void;
};

const CartGame: React.FC<Props> = ({ game, addToCart, removeFromCart }) => (
    <div>
      <h3>{game.team1} vs {game.team2}</h3>
      <div >
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(game.id)}
        >
          -
        </Button>
        {/* <p>{item.amount}</p> */}
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(game)}
        >
          +
        </Button>
      </div>
    </div>
);

export default CartGame;