import React from 'react';
import QuestionCard from './QuestionCard.js';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
// import { execSync } from 'child_process';


const theme = createMuiTheme();


theme.typography.h3 = {
  padding: "2rem",
  color: "#363636",
  textAlign: "center",
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

function App() {
  var questions = ["I know my partner’s favorite food.", "I enjoy traveling with my partner.", "The time I spend with my partner is special to us.", " My partner and I have similar ideas about roles in marriage.", "I can insult my partner during our discussions.", " I can be humiliating when we discuss."];
  const [val1, setVal1] = React.useState(60);
  const [val2, setVal2] = React.useState(60);
  const [val3, setVal3] = React.useState(60);
  const [val4, setVal4] = React.useState(60);
  const [val5, setVal5] = React.useState(60);
  const [val6, setVal6] = React.useState(60);
  const [noDivorce, setVal7] = React.useState(false);
  const [divorce, setVal8] = React.useState(false);
  var setters = [setVal1,setVal2,setVal3,setVal4,setVal5,setVal6];
  var zipped = _.zip(questions, setters);

  function collect() {
    var fin = [];
    var command = ""
    fin.push(val1/20 - 1);
    fin.push(val2/20 - 1);
    fin.push(val3/20 - 1);
    fin.push(val4/20 - 1);
    fin.push(val5/20 - 1);
    fin.push(val6/20 - 1);
    for(let i = 0; i < fin.length; i++){
      command = command + fin[i].toString();
    }
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:5000/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            if(json.response === "1"){
              
              setVal7(true);
              setVal8(false);
            } else {
              setVal8(true);
              setVal7(false);
            }
        }
    };
    var data = JSON.stringify({"answers": command});
    xhr.send(data);
  
  }
  var divorceText = divorce ? <Typography style={{paddingTop: "1rem"}}> Yes :( </Typography> : <div/>;
  var noDivorceText = noDivorce ? <Typography style={{paddingTop: "1rem"}}>No :) </Typography> :  <div/>;

  const listItems = zipped.map((q) =>
    <div style={{width:"100%", alignContent: "center"}}>
      <QuestionCard setter={q[1]} Question = {q[0]}/>
      <div style={{padding: '.5rem'}}/>
    </div>
  );
  return (
    <div style = {{backgroundColor: '#FDDFDF', width: "100%", height: "145vh"}}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Are You Going to Divorce Your Partner?</Typography>
      </ThemeProvider>
    <Grid container direction="column" justify="center" alignItems="center">
      {listItems}
      <Button variant="outlined" style={{backgroundColor: "#F0DEFD"}} onClick={collect}>Submit!</Button>
      {divorceText}
      {noDivorceText}
    </Grid>
    </div>
  );
}

export default App;
