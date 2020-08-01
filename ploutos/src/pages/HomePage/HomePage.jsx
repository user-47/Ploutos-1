import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewPostModal from '../../components/Modal/NewPostModal/NewPostModal.comp';
import PostContainer from '../../components/PostContainer/PostContainer.comp'
import './HomePage.styles.css';
import { createStructuredSelector } from 'reselect';
import { selectPostDetails } from '../../redux/post/post.selectors';
import { connect } from 'react-redux';


const HomePage = ({posts}) => {

  // const posts = [50, 60, 70, 80, 90, 100];
  const sideBarLinks = ["Home", "Search", "Saved", "Messages", "My Profile", "Settings", "Logout"];
  const [activeLink, setActiveLink] = useState("Home");
  const [modalShow, setModalShow] = useState(false);

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
      <div className="homepage-container">
        <div className="sidebar-container">
          <div className="sidebar">
            {
              sideBarLinks.map((link, index) => (
                <div className={`sidebar-link-cell ${ link === activeLink ? 'active' : ''}`} key={index} onClick={() => switchActiveTab(sideBarLinks.indexOf(link))}>
                  <Link className="sidebar-link">
                    {link}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <div className="post-section">
          {
            posts.map(({haveAmount, haveCurrency, wantedCurrency, rate}) => (
              <PostContainer
                haveAmount={haveAmount}
                haveCurrency={haveCurrency}
                wantedCurrency={wantedCurrency}
                rate={rate}
              />
            ))
          }
          <div className="new-post-btn" onClick={() => setModalShow(true)}>
            <div className="new-post-btn-text">
              new post
            </div>   
          </div>
          <NewPostModal
            show={modalShow}
            onHide={() => setModalShow(false)}
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