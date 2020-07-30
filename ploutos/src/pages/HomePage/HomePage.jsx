import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import NewPostModal from '../../components/Modal/NewPostModal/NewPostModal.comp'
import './HomePage.styles.css';


const HomePage = () => {

  const posts = [50, 60, 70, 80, 90, 100];
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
            posts.map(() => (
              <div className="post-container">
                <Card>
                  <Card.Header className="post-card-header">
                    <div className="post-card-avatar"></div>
                    <div className="ml-4">User Name</div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title><b>CAD for NAIRA</b></Card.Title>
                    <Card.Text>
                      I have <b>50 CAD</b> for sale, looking to exchange for <b>Naira (NGN)</b> at the rate of <b>290</b> per Dollar
                    </Card.Text>
                    <hr></hr>
                    <div className="post-card-footer">
                      <Button className="text-dark post-card-footer-btn"><b>xx</b></Button>
                      <Button className="mx-1 text-dark post-card-footer-btn"><b>Buy Some...</b></Button>
                      <Button className="text-dark post-card-footer-btn"><b>Buy All</b></Button>
                    </div>
                    
                  </Card.Body>
                </Card>
              </div>
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

export default HomePage;