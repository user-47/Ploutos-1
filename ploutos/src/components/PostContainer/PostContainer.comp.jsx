import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PostContainer.style.css';

const PostContainer = ({userName, haveAmount, haveCurrency, wantedCurrency, rate}) => (
  <div className="post-container">
    <Card>
      <Card.Header className="post-card-header">
        <div className="post-card-avatar"></div>
        <div className="ml-4">User Name</div>
      </Card.Header>
      <Card.Body>
        <Card.Title><b>CAD for NAIRA</b></Card.Title>
        <Card.Text>
          I have <b>{haveAmount} {haveCurrency}</b> for sale, looking to exchange for <b>{wantedCurrency}</b> at the rate of <b>{rate}</b> per Dollar
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
);

export default PostContainer;