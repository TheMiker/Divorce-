import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MySlider from './MySlider.js'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '67%',
    backgroundColor: '#DEF3FD',
    marginLeft: '16%'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuestionCard(props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  console.log(props.setter);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography style={{textAlign: "center"}} variant="body2" component="p">
          {props.Question}
          <br />
        </Typography>
      </CardContent>
      <MySlider setter={props.setter}/>
    </Card>
  );
}