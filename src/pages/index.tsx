import { useState } from 'react';
// import { useQuery } from 'react-query';
// Components
import { Grid, Button, LinearProgress, Badge, Modal } from '@material-ui/core';
import axios from 'axios';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// Styles
import { GameModel } from '../models/Game';
import { GetStaticProps } from 'next';
import Cart from '../components/Cart/Cart';
import { Game } from '../components/Game/Game';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
// Types

// const getProducts = async (): Promise<GameModel[]> =>
//   await (await fetch('https://fakestoreapi.com/products')).json();

const Home = ({ data }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartGames, setCartGames] = useState([] as GameModel[]);
  // const { data, isLoading, error } = useQuery<GameModel[]>(
  //   'products',
  //   getProducts
  // );
  // console.log(data);

  const getTotalGames = (games: GameModel[]) =>
    games.reduce((ack: number, game) => ack + game.amount, 0);

  const handleAddToCart = (clickedGame: GameModel) => {
    setCartGames((prev) => {
      // 1. Is the item already added in the cart?
      const isGameInCart = prev.find((game) => game.id === clickedGame.id);

      if (isGameInCart) {
        return prev.map((game) =>
          game.id === clickedGame.id
            ? { ...game, amount: game.amount + 1 }
            : game
        );
      }
      // First time the item is added
      return [...prev, { ...clickedGame, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartGames((prev) =>
      prev.reduce((ack, game) => {
        if (game.id === id) {
          if (game.amount === 1) return ack;
          return [...ack, { ...game, amount: game.amount - 1 }];
        } else {
          return [...ack, game];
        }
      }, [] as GameModel[])
    );
  };

  // if (isLoading) return <LinearProgress />;
  // if (error) return <div>Something went wrong ...</div>;

  return (
    <div>
      <Modal
        // className='modal'
        // anchor='right'
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart cartGames={cartGames} removeFromCart={handleRemoveFromCart} />
      </Modal>
      <Button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalGames(cartGames)} color='error'>
          <DescriptionTwoToneIcon />
        </Badge>
      </Button>
      <Grid container spacing={3}>
        {data?.map((game) => (
          <Grid item key={game.id} xs={12} sm={4}>
            <Game game={game} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = 'http://localhost:3000/api/game';
  const res = await axios.get(url);

  // const data = await res.data;

  return { props: { data: res.data } };
};

export default Home;
