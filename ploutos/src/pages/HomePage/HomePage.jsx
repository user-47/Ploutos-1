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
  
  const handleModalClose = () =>{
    setModalShow(false)
  }

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
        <RangeInput />
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
            posts.map((post, index) => (
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