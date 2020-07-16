import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const posts = [50, 60, 70, 80, 90, 100];
const sideBarLinks = ["Home", "Search", "Saved", "Messages", "My Profile", "Settings"]

const HomePage = () => (
	<div style={{ display:"flex", justifyContent: "center", backgroundColor: "#1b1b2e", height: "100%" }}>
    <div style={{ display:"flex", justifyContent: "space-between", width: "100%", marginTop: "5%" }}>
      <div style={{ height: "350px", width: "35%", display: "flex", justifyContent: "center",}}>
        <div style={{ height: "350px", backgroundColor: "white", width: "250px", position: "fixed" }}>
          {
            sideBarLinks.map((link) => (
              <div style={{ height: "16.6667%" }}>
                <Link style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", padding: "1.5rem", color: "black"}}>
                  {link}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <div style={{ width: "65%", height: "100%", display: "flex", flexDirection: "column" }}>
        {
          posts.map(() => (
            <div style={{ width: "600px", height: "340px", marginBottom: "2%" }}>
              <Card>
                <Card.Header style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "pink" }}></div>
                  <div className="ml-4">User Name</div>
                </Card.Header>
                <Card.Body>
                  <Card.Title><b>CAD for NAIRA</b></Card.Title>
                  <Card.Text>
                    I have <b>50 CAD</b> for sale, looking to exchange for <b>Naira (NGN)</b> at the rate of <b>290</b> per Dollar
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                  <hr></hr>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button className="text-dark" style={{ backgroundColor: "rgba(0,0,0,.1)", padding: "0.85rem", border: "none"}}><b>xx</b></Button>
                    <Button className="mx-1 text-dark" style={{ backgroundColor: "rgba(0,0,0,.1)", padding: "0.85rem", border: "none"}}><b>Buy Some...</b></Button>
                    <Button className="text-dark" style={{ backgroundColor: "rgba(0,0,0,.1)", padding: "0.85rem", border: "none"}}><b>Buy All</b></Button>
                  </div>
                  
                </Card.Body>
                {/* <Card.Footer>2 days ago</Card.Footer> */}
              </Card>
            </div>
          ))
        }
        
      </div>
    </div>
	</div>
)

export default HomePage;