import Button from '@material-ui/core/Button';
import { GameModel } from '../../models/Game';

type Props = {
  game: GameModel;
  removeFromCart: (id: number) => void;
};

const CartGame: React.FC<Props> = ({ game, removeFromCart }) => (
  <div>
    <h3>
      {game.team1} vs {game.team2}
    </h3>
    <div>
      <Button
        size='small'
        variant='contained'
        onClick={() => removeFromCart(game.id)}
      >
        <b>Remove bet</b>
      </Button>
    </div>
  </div>
);

export default CartGame;
