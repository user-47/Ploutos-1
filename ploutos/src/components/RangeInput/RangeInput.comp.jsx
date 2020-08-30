import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
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

const RangeSlider = ({
  minMaxValue,
  value,
  filter,
  handleChange,
  handleBlur,
  handleFilterChange,
  handleInputChange,
}) => {
  const classes = useStyles();
  
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
              // getAriaValueText={valuetext}
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
                step: 1,
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
                step: 1,
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
