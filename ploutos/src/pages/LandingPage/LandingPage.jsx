import React from 'react';
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal.comp';
import Header from '../../components/Header/Header.comp';
import Carousel from 'react-elastic-carousel';
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './LandingPage.styles.css';
import Scroll from 'react-scroll';


const scroll = Scroll.animateScroll;


const BannerSection = () => {
  return (
    <div id="bannerRegion">
      <div 
        style={{
          width: '100%',
          height: '860px',
          backgroundImage: `url(${require('../../assets/images/banner_bg.png')})`,
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
};

const WhatMakesMyxchangeDifferentComponent = () => {
  return (
    <div>
      <img src={require('../../assets/icons/heading-icon.svg')} style={{width: '28px', height: '28px'}} />
      <div style={{color: '#0D4C9E'}}>
        <h4 style={{ marginTop: '2%', fontWeight: 'bold' }}>What makes myxchange different?</h4>
        <div style={{display: 'flex', width: '87%', marginTop: '2.5%'}}>
          <div style={{display: 'flex', width: '50%'}}>
            <img src={require('../../assets/icons/instant_icon.png')} style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Competitive Rates</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <img src={require('../../assets/icons/instant_icon.png')} style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Instant Transfer</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
        </div>

        <div style={{display: 'flex', width: '87%', marginTop: '2.5%'}}>
          <div style={{display: 'flex', width: '50%'}}>
            <img src={require('../../assets/icons/instant_icon.png')} style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Competitive Rates</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <img src={require('../../assets/icons/instant_icon.png')} style={{width: '36px', height: '36px', margin: '2.5%'}} />
            <div style={{ fontSize: '14px'}}>
              <div style={{ fontWeight: 'bold'}}>Instant Transfer</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officiis, inventore tempore amet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const SectionImg = ({
  largeCircleSize,
  smallCircleSize,
  pryImg,
  secondaryImg,
  imgHeight = '350px',
  imgWidth = '495px',
  imgMarginTop = '20%',
  imgMarginLeft = '0'
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
        <div style={{ display: `${secondaryImg ? ('flex') : ('block')}`, zIndex: '2', position: 'relative'}}>
          <div 
            style={{
              backgroundImage: `url(${pryImg})`,
              backgroundSize: 'contain',
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
                  backgroundSize: 'contain',
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
          // zIndex: '-1',
          bottom: '100%',
          right: '-2%',
        }}
      ></div>
    </div>
    
  )
};

const HowItWorksComponent = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-end'}}>
      {/* <img src={require('../../assets/images/p_heading.PNG')} style={{width: '28px', height: '28px'}} /> */}
      <div style={{color: '#0D4C9E', width: '75%'}}>
        <img src={require('../../assets/images/p_heading.PNG')} style={{width: '28px', height: '28px'}} />
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
};

const ContactUsForm = ({onContactFormSubmission}) => {
  return(
    <div style={{ width: '55%'}}>
      <form
        noValidate
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField id="standard-basic" label="Your Name" className="contact-us-textfield mt-3 mb-3" />
        <TextField id="standard-basic" label="Email Address" className="contact-us-textfield mt-3 mb-3" />
        <TextField id="standard-basic" label="Comment" className="contact-us-textfield mt-3 mb-4" />
        <Button 
          variant="outlined"
          className="mt-5"
          onClick={() => onContactFormSubmission()}
          style={{
            borderRadius: '25px',
            padding: '10px',
            fontSize: '17px',
            border: 'solid 1.5px #0D4C9E',
            color: '#0D4C9E'
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  )
};

const ContactUsImgSection = ({isContactFormSubmitted}) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${require('../../assets/images/contact-us-bg.svg')})`,
          width: '65%',
          height: '500px',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: `${isContactFormSubmitted ? '5%' : '13%'}`,
              marginRight: `${isContactFormSubmitted ? '4%' : '' }`,
              flexDirection: 'column',
              color: '#0D4C9E',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 'bold'}}>
              <div>{isContactFormSubmitted ? <p>Thanks for <br/> contacting Us</p> : 'Contact'}</div>
              {isContactFormSubmitted ? (null) : (<div style={{ float: 'right'}}>Us</div>)}
            </div>
            {isContactFormSubmitted ? (
              <div>
                <img src={require('../../assets/images/mail_icon.svg')} style={{ width: '175px', height: '175px'}} />
              </div>
            ) : (
              <div style={{ width: '78%', marginTop: '-14%', marginLeft: '12%' }}>
                <img src={require('../../assets/images/mail_icon.svg')} style={{ width: '175px', height: '175px'}} />
              </div>
            )}
            
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{ fontSize: '0.875rem' }}>{isContactFormSubmitted ? ("We'll get in touch with you shortly") : ("We'll like to hear from you")}</div>
              {isContactFormSubmitted ? (
                <a onClick={() => scroll.scrollToTop()} style={{ color: '#0D4C9E', cursor: 'pointer' }}>Top</a>
              ) : (
                <div style={{ float: 'right', fontSize: '0.8rem', fontWeight: 'bold' }}>info@myxchange.com</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PairedSection = ({ rightComponent, leftComponent, isContactFormSubmitted }) => {
  
  return (
    <div
      style={{
        display: 'flex',
        width: '100%', 
        marginTop: '3%',
        marginBottom: '5%',
        alignItems: 'center',
      }}
    >
      <div 
        style={{
          width: `${isContactFormSubmitted ? '0' : '50%'}`,
          height: `${isContactFormSubmitted ? '0' : 'auto'}`,
          display: 'flex',
          justifyContent: 'center',
          visibility: `${isContactFormSubmitted ? 'hidden' : 'visible'}`,
          // alignItems: 'center',
          transition: 'height 2s, width 2s',
        }}
      >
        {leftComponent}
      </div>
      <div 
        style={{
          width: `${isContactFormSubmitted ? '100%' : '50%'}`,
          // marginTop: '3%',
          display: 'flex',
          transition: 'width 2s',
        }}
      >
        {rightComponent}
      </div>
    </div>
  )
};

const FooterSection = () => {
  const date = new Date();
  return (
    <div
      style={{
        backgroundImage: `url(${require('../../assets/images/footer_bg_color.svg')})`,
        width: '100%',
        height: '200px',
        color: '#0D4C9E'
      }}
    >
      <div 
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'column'
          }}
        >
        <div style={{display: 'flex', justifyContent: 'space-between', height: '35%', alignItems: 'center'}}>
          <div style={{fontSize: '0.875rem'}}>
            <span className="px-3" style={{ borderRight: 'solid 1.8px #0D4C9E' }} >About Us</span>
            <span className="px-3" style={{ borderRight: 'solid 1.8px #0D4C9E' }} >FAQs</span>
            <span className="px-3" style={{ borderRight: 'solid 1.8px #0D4C9E' }} >Privacy Policy</span>
            <span className="px-3" style={{ borderRight: 'solid 1.8px #0D4C9E' }} >Licenses</span>
            <span className="px-3" >Contact</span>
          </div>
          <div style={{ width: '20%', display: 'flex', justifyContent: 'space-between', marginRight: '-25%' }} >
            <span><InstagramIcon style={{ fontSize: '17px' }} /></span>
            <span><TwitterIcon style={{ fontSize: '17px' }} /></span>
          </div>
        </div>
        <hr style={{ width: '16%', marginTop: 0 }}></hr>
        <div style={{ fontSize: '12px', paddingBottom: '12px', marginTop: '1%' }} >Copyright {date.getFullYear()}</div>
      </div>
    </div>
  )
}

const LandingPage = () => {
  const testimonials = [1, 2, 3, 4, 5, 6];
  const [contactFormSubmitted, setContactFormSubmitted] = React.useState(false);

  const onContactFormSubmit = () => {
    setContactFormSubmitted(true)
  }

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
          leftComponent={
            <SectionImg
              largeCircleSize={'400px'}
              smallCircleSize={'200px'}
              pryImg={require('../../assets/images/laptop.png')} 
            />
          }
        />
      </section>
      {/* end what makes myxchange different section */}

      {/* start how it works section */}
      <section
        style={{
          padding: '40px',
          marginTop: '5%',
          display: 'flex',
          width: '100%',
          height: '1300px',
          alignItems: 'center',
          backgroundImage: `url(${require('../../assets/images/how-it-works-bg.svg')})`,
        }}
      >
        {/* <img src={require('../../assets/images/t.jpg')} /> */}
        <PairedSection 
          rightComponent={
            <SectionImg
              largeCircleSize={'500px'}
              smallCircleSize={'300px'}
              pryImg={require('../../assets/images/phone_mockup_demo.png')}
              secondaryImg={require('../../assets/images/phone_mockup_demo.png')}
              imgHeight={'510px'}
              imgWidth={'300px'}
              imgMarginTop={'5%'}
              imgMarginLeft={'5%'}
            />
          }
          leftComponent={<HowItWorksComponent />}
        />
      </section>
      {/* end how it works section */}

      {/* start testimonial section */}
      <section
        style={{
          padding: '40px',
          marginTop: '5%',
          marginBottom: '5%',
          display: 'flex',
          width: '100%',
          // height: '1000px',
          flexDirection: 'column',
        }}
      >
        <div style={{ color: '#0D4C9E', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '3%', marginBottom: '4.5%' }}>
          <div style={{ width: '30%' }}>
            <img src={require('../../assets/icons/heading-icon.svg')} style={{width: '28px', height: '28px'}} />
            <h4 style={{ marginTop: '4.5%', fontWeight: 'bold' }}>What People Think.</h4>
          </div>
        </div>
        <Carousel itemsToScroll={1} itemsToShow={2} enableAutoPlay autoPlaySpeed={5000}>
          {
            testimonials.map((index) => (
              <Card style={{ width: '60%', border: '1px solid #0D4C9E', color:'#0D4C9E' }}  variant="outlined" key={index} >
                <CardContent>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore exercitationem laboriosam quo, ea dolore deserunt accusantium repellendus nihil, sit delectus fugiat rerum molestias dolor eos necessitatibus. Sint dolore ratione quo.
                    sit delectus fugiat rerum molestias dolor eos necessitatibus. Sint dolore ratione quo.
                  </Typography>
                </CardContent>
              </Card>
            ))
          }
        </Carousel>
      </section>
      {/* end testimonial section */}

      {/* start contact us section */}
      <section
        style={{
          padding: '40px'
        }}
      >
        <PairedSection 
          rightComponent={<ContactUsImgSection isContactFormSubmitted={contactFormSubmitted}/>}
          leftComponent={<ContactUsForm onContactFormSubmission={onContactFormSubmit} />}
          isContactFormSubmitted={contactFormSubmitted}
        />
      </section>
      {/* end contact us section */}
      
      {/* start footer section */}
      <section>
        <FooterSection />
      </section>
      {/* end footer section */}
    </div>
  )
}

export default LandingPage;