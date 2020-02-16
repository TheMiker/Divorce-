import React from 'react';
import Slider from '@material-ui/core/Slider';
import './MySlider.css';


const marks = [
  {
    value: 20,
    label: 'Strongly Disagree',
  },
  {
    value: 40,
    label: 'Disagree',
  },
  {
    value: 60,
    label: 'Undecided',
  },
  {
    value: 80,
    label: 'Agree',
  },
  {
    value: 100,
    label: 'Strongly Agree',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function MySlider(props) {

  const handleChange = (event, newValue) => {
    props.setter(newValue);
  };

  return (
    <div style= {{width: "76%"}}>
      <Slider
        track={false}
        getAriaValueText={valuetext}
        color='secondary'
        defaultValue={60}
        marks={marks}
        aria-labelledby="discrete-slider"
        step={20}
        min={20}
        max={100}
        style ={{marginLeft: '15%', valueLabel: '50rem'}}
        onChange={handleChange}
      />

    </div>
  );
}