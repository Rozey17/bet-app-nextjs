import {
    Button,
    Card,
    CardContent,
    Box,
    Grid,
    InputLabel,
   Typography
  } from "@material-ui/core";
  import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GameModel } from "../../models/Game";
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),        
        }
      },
        paper: {
          // // margin: 'auto',
          // maxWidth: 500,
          padding: theme.spacing(3),
        },
    })
  );
  
  const boxProps = {
    bgcolor: "#4682B4",
    style: { width: "1.8rem", height: "2rem" },
    color: "white",
  };
  
  const boxProps2 = {
    bgcolor: "#191970",
    style: { width: "100%", height: "2rem" },
    color: "white",
  };
  
  const defaultProps = {
    bgcolor: "#C0C0C0",
    m: 1,
    style: { width: "1.8rem", height: "1.8rem" },
  };
  
  
  type Props = {
    game: GameModel,
    handleAddToCart: (clickedGame:GameModel) => void;
  }
  const Game: React.FC<Props> = ({game, handleAddToCart}:Props) => { 
    const classes = useStyles();


    return (
  <Grid container>
  <Card  className={classes.root} variant="outlined">
        <CardContent className={classes.root}>
          <Box {...boxProps2}>
          <b>{game.gameTime}  {game.team1} - {game.team2}</b>
          </Box>
            <InputLabel>1N2 - N°{game.id}</InputLabel>
          
            <Button variant="outlined" onClick={() => handleAddToCart(game)}>
            <Box {...defaultProps}>
              <b>1</b>
            </Box>
            <Typography>
              <b>{game.odd1}</b>
            </Typography>
          </Button>
          <Button variant="outlined" onClick={() => handleAddToCart(game)}>
            <Box {...defaultProps}>
              <b>N</b>
            </Box>
            <Typography>
              <b>{game.oddDraw}</b> 
            </Typography>
          </Button>
          <Button variant="outlined" onClick={() => handleAddToCart(game)}>
            <Box {...defaultProps}>
              <b>2</b>
            </Box>
            <Typography>
            <b>{game.odd2}</b> 
            </Typography>
          </Button>
          <Button>
            <Box {...boxProps}>
              <b>{game.prediction}</b>
            </Box>
          </Button>        
        </CardContent>
      </Card>
          </Grid>
    );
  };
  
  export { Game };
  