import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewPostModal from '../../components/Modal/NewPostModal/NewPostModal.comp';
import PostContainer from '../../components/PostContainer/PostContainer.comp';
import RangeInput from '../../components/RangeInput/RangeInput.comp';
import './HomePage.styles.css';
import { createStructuredSelector } from 'reselect';
import { selectPostDetails } from '../../redux/post/post.selectors';
import { connect } from 'react-redux';


const HomePage = ({posts}) => {

  const sideBarLinks = ["Home", "Search", "Saved", "Messages", "My Profile", "Settings"];
  const [activeLink, setActiveLink] = useState("Home");
  const [modalShow, setModalShow] = useState(false);
  const minMaxValue = [100, 500]
  const [value, setValue] = React.useState([minMaxValue[0], minMaxValue[1]]);
  
  const [filter, setFilter] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        break;
      case 1:
        setActiveLink("Search")
        break;
      case 2:
        setActiveLink("Saved")
        break;
      case 3:
        setActiveLink("Messages")
        break;
      case 4:
        setActiveLink("My Profile")
        break;
      case 5:
        setActiveLink("Settings")
        break;
      default:
        setActiveLink("Home")
        break;
    }
  };

  const onFilterChange = () => {
    switch (filter) {
      case 'All':
        return posts.filter(post => 
          post.rate >= value[0] && post.rate <= value[1]
        );
        break;
    
      default:
        const filteredPosts = posts.filter(post => 
          post.sellingCurrency.toLowerCase() === filter.toLowerCase() && 
          (post.rate >= value[0] && post.rate <= value[1])
        );
        return filteredPosts;
        break;
    }
  }
  

  return(
    <div className="homepage-body">
      <div 
        style={{
          // color: 'red',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: 'auto',
          height: 'auto',
        }}
      >
        <RangeInput
          minMaxValue={minMaxValue}
          value={value}
          filter={filter}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFilterChange={handleFilterChange}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="homepage-container">
        <div className="sidebar-container">
          <div className="sidebar">
            {
              sideBarLinks.map((link, index) => (
                <div className={`sidebar-link-cell ${ link === activeLink ? 'active' : ''}`} key={index} onClick={() => switchActiveTab(sideBarLinks.indexOf(link))}>
                  <Link to={'/home'} className="sidebar-link">
                    {link}
                  </Link>
                </div>
              ))
            }
            <div className="logout-link">Logout</div>
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