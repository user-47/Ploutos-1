import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import BuySomeModal from '../Modal/BuySomeModal/BuySomeModal.comp';
import BuyAllModal from '../Modal/BuyAllModal/BuyAllModal.comp';
import TransactionInitializationModal from '../Modal/TransactionInitializationModal/TransactionInitialization.comp';
import './PostContainer.style.css';

const PostContainer = ({userName, sellingAmount, sellingCurrency, buyingCurrency, rate}) => {

  const [buySomeModalShow, setBuySomeModalShow] = useState(false);
  const [buyAllModalShow, setBuyAllModalShow] = useState(false);
  const [transactionIntiatedModalShow, setTransactionIntiatedModalShow] = React.useState(false);

  const handleBuySomeModalClose = () => {
    setBuySomeModalShow(false);
    setTransactionIntiatedModalShow(true);
  };
  const handleCloseOnCancel = () => {
    setBuySomeModalShow(false);
  };

  const handleModalCloseWithYesBtn = () => {
    setBuyAllModalShow(false);
    setTransactionIntiatedModalShow(true);
  };

  const handleModalCloseWithNoBtn = () => {
    setBuyAllModalShow(false);
  }

  const handleOkayBtn = () => {
    setTransactionIntiatedModalShow(false)
  };

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
            <Button className="text-dark post-card-footer-btn" onClick={() => setBuyAllModalShow(true)}><b>Buy All</b></Button>
          </div>
          <BuySomeModal
            show={buySomeModalShow}
            onHide={() => setBuySomeModalShow(false)}
            closeOnSubmit={handleBuySomeModalClose}
            closeWithCancelBtn={handleCloseOnCancel}
          />
          <BuyAllModal
            show={buyAllModalShow}
            onHide={() => setBuyAllModalShow(false)}
            closeWithYesBtn={handleModalCloseWithYesBtn}
            closeWithNoBtn={handleModalCloseWithNoBtn}
          />
          <TransactionInitializationModal
            show={transactionIntiatedModalShow}
            onHide={() => setTransactionIntiatedModalShow(false)}
            closeOnSubmit={handleOkayBtn}
          />
          
        </Card.Body>
      </Card>
    </div>
  )
};

export default PostContainer;