import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const valuetext = (value) => {
  return `${value}°C`;
}

const RangeSlider = () => {
  const classes = useStyles();
  const minMaxValue = [100, 500]
  const [value, setValue] = React.useState([minMaxValue[0], minMaxValue[1]]);
  
  const [filter, setFilter] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    // const {name} = event.target
    console.log(event.target.value)
    // if (event.target.name == 'min') {
    //   setValue(event.target.value === '' ? '' : [Number(event.target.value), value[1]]);
    // } else if (event.target.name == 'max') {
    //   setValue(event.target.value === '' ? '' : [value[0], Number(event.target.value)]);
    // }
    switch (event.target.name) {
      case 'min':
        setValue(event.target.value === '' ? ['', value[1]] : [Number(event.target.value), value[1]]);
        break;
      case 'max':
        setValue(event.target.value === '' ? [value[0], ''] : [value[0], Number(event.target.value)]);
        break;
      
      default:
        setValue(event.target.value === '' ? [value[0], value[1]] : Number(event.target.value));
        break;
    }
    
  };

  const handleBlur = (event) => {
    // if (value < minMaxValue[0]) {
    //   setValue([minMaxValue[0]]);
    // } else if (value > minMaxValue[1]) {
    //   setValue(minMaxValue[1]);
    // }
    
    switch (event.target.name) {
      case 'min':
        if (event.target.value < minMaxValue[0]) {
          setValue([minMaxValue[0], value[1]]);
        } 
        break;
      case 'max':
        if (event.target.value > minMaxValue[1]) {
          setValue([value[0], minMaxValue[1]]);
        } 
        break;
    
      default:
        setValue([value[0], value[1]]);
        break;
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'space-between', margin:'1.2%'}}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filter}
            onChange={handleFilterChange}
            label="filter"
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'CAD'}>CAD</MenuItem>
            <MenuItem value={'NGN'}>NGN</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div className={classes.root}>
        <div style={{marginRight: '3%'}}>Rate: </div>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              min={minMaxValue[0]}
              max={minMaxValue[1]}
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-number"
              label="min"
              name="min"
              type="number"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={value[0]}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 10,
                min: minMaxValue[0],
                max: minMaxValue[1],
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-number"
              label="max"
              name="max"
              type="number"
              onChange={handleInputChange}
              onBlur={handleBlur}
              value={value[1]}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 10,
                min: minMaxValue[0],
                max: minMaxValue[1],
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
};

export default RangeSlider;
