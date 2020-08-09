import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import BuySomeModal from '../Modal/BuySomeModal/BuySomeModal.comp';
import './PostContainer.style.css';

const PostContainer = ({userName, sellingAmount, sellingCurrency, buyingCurrency, rate}) => {

  const [buySomeModalShow, setBuySomeModalShow] = useState(false);

  return(
    <div className="post-container">
      <Card>
        <Card.Header className="post-card-header">
          <div className="post-card-avatar"></div>
          <div className="ml-4">User Name</div>
        </Card.Header>
        <Card.Body>
          <Card.Title><b>CAD for NAIRA</b></Card.Title>
          <Card.Text>
            I have <b>{sellingAmount} {sellingCurrency}</b> for sale, looking to exchange for <b>{buyingCurrency}</b> at the rate of <b>{rate}</b> per Dollar
          </Card.Text>
          <hr></hr>
          <div className="post-card-footer">
            <Button className="text-dark post-card-footer-btn"><b>xx</b></Button>
            <Button className="mx-1 text-dark post-card-footer-btn" onClick={() => setBuySomeModalShow(true)}><b>Buy Some...</b></Button>
            <Button className="text-dark post-card-footer-btn"><b>Buy All</b></Button>
          </div>
          <BuySomeModal
              show={buySomeModalShow}
              onHide={() => setBuySomeModalShow(false)}
            />
          
        </Card.Body>
      </Card>
    </div>
  )
};

export default PostContainer;