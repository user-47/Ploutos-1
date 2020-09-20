import React from 'react';
import Button from "react-bootstrap/Button";
import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal.comp';
import Header from '../../components/Header/Header.comp';
import './LandingPage.styles.css';


const BannerSection = () => {
  return (
    <div>
      <div 
        style={{
          width: '100%',
          height: '850px',
          backgroundImage: "url('../../assets/images/bgImage.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: '6%'
        }}
      >
        <div
          style={{
            marginTop: '5%',
            marginLeft: '6%',
            height: '75%',
            width: '39%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderRadius: '45% 70% 45% 50%',
          }}
        >
          <div
            style={{
              color: 'white',
              marginLeft: '8%'
            }}
          >
            <div style={{fontSize: '85px', lineHeight: '0.9', fontWeight: 'bold'}}>
              EXCHANGE <br/>
              NAIRA <br/>
              AND CAD <br/>
            </div>
            <p>Choose your own Exchange Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatMakesMyxchangeDifferentComponent = () => {
  return (
    <div>
      <img src='../../assets/images/p_heading.PNG' style={{width: '36px', height: '36px'}} />
      <div style={{color: '#0D4C9E'}}>
        <h4 style={{ marginTop: '2%', fontWeight: 'bold' }}>What makes myxchange different?</h4>
        <div style={{display: 'flex', width: '87%', marginTop: '2.5%'}}>
          <div style={{display: 'flex', width: '50%'}}>
            <img src='../../assets/images/instant_icon.png' style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Competitive Rates</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <img src='../../assets/images/instant_icon.png' style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Instant Transfer</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
        </div>

        <div style={{display: 'flex', width: '87%', marginTop: '2.5%'}}>
          <div style={{display: 'flex', width: '50%'}}>
            <img src='../../assets/images/instant_icon.png' style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Competitive Rates</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <img src='../../assets/images/instant_icon.png' style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Instant Transfer</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionImg = ({
  largeCircleSize,
  smallCircleSize,
  pryImg,
  secondaryImg,
  imgHeight = '300px',
  imgWidth = '360px',
  imgMarginTop = '20%',
  imgMarginLeft = '15%'
}) => {
  return (
    <div style={{height: `${largeCircleSize}`, width: `${largeCircleSize}`,}}>
      <div
        style={{
          height: `${largeCircleSize}`,
          width: `${largeCircleSize}`,
          borderRadius: '50%',
          backgroundColor: '#6BA8F8',
          display: 'flow-root'
        }}
      >
        {/* <div style={{ height: `${smallCircleSize}`, width: `${smallCircleSize}`, borderRadius: '50%', backgroundColor: '#6BA8F8', float: 'right', marginRight: '-7%',position: 'relative', zIndex: '-1'}}></div> */}
        {/* <img src="../../assets/images/Laptop_mockup.png" /> */}
        <div style={{ display: `${secondaryImg ? ('flex') : ('block')}`}}>
          <div 
            style={{
              backgroundImage: `url(${pryImg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: `${imgHeight}`,
              width: `${imgWidth}`,
              // zIndex: '10',
              marginTop: `${imgMarginTop}`,
              marginLeft: `${imgMarginLeft}`,
            }}
          ></div>
          {
            secondaryImg ? (
              <div 
                style={{
                  backgroundImage: `url(${secondaryImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: `${imgHeight}`,
                  width: `${imgWidth}`,
                  // zIsndex: '10',
                  marginTop: '25%',
                  marginLeft: '12%',
                  marginRight: '-15%',
                }}
              ></div>
            ) : (<div></div>)
          }
          
        </div>
      </div>
      <div 
        style={{ 
          height: `${smallCircleSize}`,
          width: `${smallCircleSize}`,
          borderRadius: '50%',
          backgroundColor: '#6BA8F8',
          float: 'right',
          marginRight: '-7%',
          position: 'relative',
          zIndex: '-1',
          bottom: '100%',
          right: '-2%',
        }}
      ></div>
    </div>
    
  )
}

const HowItWorksComponent = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-end'}}>
      {/* <img src='../../assets/images/p_heading.PNG' style={{width: '36px', height: '36px'}} /> */}
      <div style={{color: '#0D4C9E', width: '75%'}}>
        <img src='../../assets/images/p_heading.PNG' style={{width: '36px', height: '36px'}} />
        <h4 style={{ marginTop: '2%', fontWeight: 'bold' }}>How it works</h4>
        <div style={{display: 'flex', width: '80%', marginTop: '2.5%', flexDirection: 'column'}}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut ad quisquam corporis. Eum voluptates voluptatem omnis, repudiandae esse officiis, quos ipsum suscipit voluptatibus et nam possimus vero tempore corrupti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut ad quisquam corporis. Eum voluptates voluptatem omnis, repudiandae esse officiis, quos ipsum suscipit voluptatibus et nam possimus vero tempore corrupti.
          </div>
          <br/>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio mollitia, magni sequi placeat aliquam aut voluptatem quia accusamus, aliquid consequuntur iusto ad, voluptas corrupti. Corporis numquam commodi impedit culpa omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut ad quisquam corporis. Eum voluptates voluptatem omnis, repudiandae esse officiis, quos ipsum suscipit voluptatibus et nam possimus vero tempore corrupti.
          </div>
        </div>
      </div>
    </div>
  )
}

const PairedSection = ({ rightComponent, leftComponent }) => {
  
  return (
    <div
      style={{
        display: 'flex',
        width: '100%', 
        marginTop: '3%',
        marginBottom: '5%',
        // alignItems: 'center',
      }}
    >
      <div 
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        {leftComponent}
      </div>
      <div style={{width: '50%', marginTop: '3%',}}>
        {rightComponent}
      </div>
    </div>
  )
}

const LandingPage = () => {
  
  return (
    <div>
      <Header />
      <BannerSection />
      {/* start what makes myxchange different section */}
      <section
        style={{
          padding: '40px'
        }}
      >
        <PairedSection 
          rightComponent={<WhatMakesMyxchangeDifferentComponent />}
          leftComponent={<SectionImg largeCircleSize={'400px'} smallCircleSize={'200px'} pryImg={'../../assets/images/bgImage.png'} />}
        />
      </section>
      {/* end what makes myxchange different section */}

      {/* start how it works section */}
      <section
        style={{
          padding: '40px',
          marginTop: '5%', 
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <PairedSection 
          rightComponent={<SectionImg largeCircleSize={'500px'} smallCircleSize={'300px'} pryImg={'../../assets/images/bgImage.png'} secondaryImg={'../../assets/images/bgImage.png'} imgHeight={'500px'} imgWidth={'280px'} imgMarginTop={'5%'} imgMarginLeft={'5%'} />}
          leftComponent={<HowItWorksComponent />}
        />
      </section>
      {/* end how it works section */}
    </div>
  )
}

export default LandingPage;