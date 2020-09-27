import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewPostModal from '../../components/Modal/NewPostModal/NewPostModal.comp';
import PostContainer from '../../components/PostContainer/PostContainer.comp';
import RangeSlider from '../../components/RangeInput/RangeInput.comp';
import './HomePage.styles.css';
import { createStructuredSelector } from 'reselect';
import { selectPostDetails } from '../../redux/post/post.selectors';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import Slider from '@material-ui/core/Slider';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const HomePage = ({posts}) => {

  const sideBarLinks = [
    {
      linkText: "Home",
      icon: <HomeIcon style={{ fontSize: 25}} className="mr-4"/>
    }, 
    {
      linkText: "Filter",
      icon: <SearchIcon style={{ fontSize: 25}} className="mr-4"/>
    }, 
    {
      linkText: "Saved",
      icon: <FavoriteIcon style={{ fontSize: 25}} className="mr-4"/>
    }, 
    {
      linkText: "Messages",
      icon: <EmailIcon style={{ fontSize: 25}} className="mr-4"/>
    }, 
    {
      linkText: "Settings",
      icon: <SettingsIcon style={{ fontSize: 25}} className="mr-4"/>
    }
  ];
  const [activeLink, setActiveLink] = useState("Home");
  const [openFilter, setOpenFilter] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const minMaxValue = [100, 500]
  const [value, setValue] = React.useState([minMaxValue[0], minMaxValue[1]]);
  
  const [filter, setFilter] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const handleInputChange = (event) => {
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
  
  const handleModalClose = () =>{
    setModalShow(false)
  };

  const switchActiveTab = (indexValue) => {
    switch (indexValue) {
      case 0:
        setActiveLink("Home")
        setOpenFilter(false);
        break;
      case 1:
        setActiveLink("Filter");
        setOpenFilter(true);
        break;
      case 2:
        setActiveLink("Saved")
        setOpenFilter(false);
        break;
      case 3:
        setActiveLink("Messages")
        setOpenFilter(false);
        break;
      // case 4:
      //   setActiveLink("My Profile")
      //   setOpenFilter(false);
      //   break;
      case 4:
        setActiveLink("Settings")
        setOpenFilter(false);
        break;
      default:
        setActiveLink("Home")
        setOpenFilter(false);
        break;
    }
  };

  const onFilterChange = () => {
    switch (filter) {
      case 'All':
        return posts.filter(post => 
          post.rate >= value[0] && post.rate <= value[1]
        );
        // break;
    
      default:
        const filteredPosts = posts.filter(post => 
          post.sellingCurrency.toLowerCase() === filter.toLowerCase() && 
          (post.rate >= value[0] && post.rate <= value[1])
        );
        return filteredPosts;
        // break;
    }
  }
  

  return(
    <div className="homepage-body">
      {/* <div 
        style={{
          // color: 'red',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: 'auto',
          height: 'auto',
        }}
      >
        <RangeSlider
          minMaxValue={minMaxValue}
          value={value}
          filter={filter}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFilterChange={handleFilterChange}
          handleInputChange={handleInputChange}
        />
      </div> */}
      <div className="homepage-container">
        <div className="sidebar-container">
          <div className="sidebar">
            {
              sideBarLinks.map(({linkText, icon}, index) => (
                <div 
                  className={`sidebar-link-cell ${ linkText === activeLink ? 'active' : ''}`} 
                  key={index} 
                  onClick={() => switchActiveTab(sideBarLinks.findIndex(link => link.linkText === linkText))}
                >
                  <Link to={'/home'} className="sidebar-link">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                      <div>{icon} {linkText}</div>
                      
                      <div style={{ display: `${ openFilter && linkText === "Filter" ? ('block') : ('none')}`}}>
                        <FormControl variant="outlined" className={`${classes.formControl} whiteInputLabel`}>
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
                    </div>
                    
                    
                    { openFilter && linkText === "Filter" ? (
                      <div style={{margin: '3%'}}>
                        <div>Rate :</div>
                        <RangeSlider
                          minMaxValue={minMaxValue}
                          value={value}
                          filter={filter}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          handleFilterChange={handleFilterChange}
                          handleInputChange={handleInputChange}
                        />
                      </div>
                      ) : (
                        ''
                      )
                    }
                  </Link>

                </div>
              ))
            }
            <div className="logout-link">
              <PowerSettingsNewIcon style={{ fontSize: 25}} className="mr-2" />
              Logout
            </div>
          </div>
        </div>
        <div className="post-section">
          {
            onFilterChange().map((post, index) => (
              <PostContainer
                post={post}
                key={index}
              />
            ))
          }
          <div className="new-post-btn">
            <div className="new-post-btn-text" onClick={() => setModalShow(true)}>
              new post
            </div>   
          </div>
          <NewPostModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            closeOnSubmit={handleModalClose}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  posts: selectPostDetails
});

export default connect(mapStateToProps)(HomePage);