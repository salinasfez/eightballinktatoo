import React from 'react';
import '../src/App.css';
import 'bulma/css/bulma.css';
import Logo from '../src/images/eihgth-ball-color.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Map from './Map';






class App extends React.Component{
  state = {
    text: {
      recipient: '',
      textMessage: '',
      sent: false
    }
  }
  facebookTab = () => {
    window.open(
        'https://www.facebook.com/eightballerink18',
        '_blank'
      );
  }
  instagramTab = () => {
    window.open(
  'https://www.instagram.com/eightballinktattoo/',
        '_blank'
      );
  }
  emailTab = () => {
    window.open(
      'mailto:E8ball.ink18@gmail.com?subject=Tattoo Apppointment',
        '_blank'
      );
  }
  sendText = () => {
    const { text } = this.state;
    //pass varibles in query string from get request
    fetch(`http://localhost:3000/send-text?recipient=${text.recipient}&textMessage=${text.textMessage}`)
    
    .catch(err => console.log(err));
  }
  callShop = () => {
    window.open(
        'tel:815-770-0299',
        '_blank'
    )
}
  handleDrop = () => {
    document.getElementById("myDropdown").classList.toggle("show");
    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
          const dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
  }
  render(){
    const { text} = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
    return(
      <div className='container'>
        <div className='top-flex-container'>
        <div className="dropbtn">
                    <div onClick={this.handleDrop} className='dropbtn menu-button-burger'></div>
                    {/* <button onClick={this.handleDrop} className="dropbtn">Menu</button> */}
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#arte">Arte</a>
                        <a href='#social-media'>Social Media</a>
                        <a href="#location">Location</a>
                        <a href="#business-hours">Hours</a>
                    </div>
        </div>
        <div className='empty-space'>
            <img src={Logo} className='logo'/>
            <h5 id='phone-num'>(815) 770-0299</h5>
        </div>
        </div>
        <div className='welcome'>
          <div>
            <section className='section'>
              <h1 id='welcome-header'>WELCOME TO 8BALL INK TATTOO</h1>
              <h3 id='established'>|  ESTABLISHED 2020  |</h3>
            </section>
          </div>
          
          <div>
            <p className='article'>
                 Ideas become dreams. Dreams become reality. 8ball Ink Tattoo bloomed from the idea of an artist who wanted to bring a tattoo studio to his hometown. A studio dedicated to quality tattooing. You will not find an ego at 8ball Ink Tattoo, instead you'll be welcomed with respect regardless of where you come from. The goal is to provide customers with a unique tattoo as original as it was portrayed in their plans.  
            </p>
          </div>
        </div>
        <div id='social-media' className='icon-container'>
          <div>
            <h5 id='like'>Like, Follow, Email, or Call -----></h5>

          </div>
            <div className='clase-iconos'>
              <img src={require('../src/images/icons/fb.svg')} alt={'facebook'} className='icons' onClick={() => this.facebookTab()}/>
              <img src={require('../src/images/icons/ig.svg')} alt={'ig'} className='icons' onClick={() => this.instagramTab()}/>
              <img src={require('../src/images/icons/email.svg')} alt={'email'} className='icons' onClick={() => this.emailTab()}/>
              <img src={require('../src/images/icons/phone-icon.svg')} alt={'phone'} className='icons' onClick={() => this.callShop()}/>
            </div>
          </div>
        {/* className='body' */}
        <div className='body'>
          {/* carousel start */}
          <div className='caroussel' id='arte'>
          
          <Carousel>
              <Carousel.Item >
                <img  className="d-block w-100" src={require('../src/images/IMG_4946.jpeg')} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/harley.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/clock.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/christt.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/ink4.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/ink6.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/ink3.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item' >
                <img  className="d-block w-100" src={require('../src/images/IMG_0872.jpeg')} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item >
                <img className="d-block w-100" src={require('../src/images/ink2.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_1542.jpeg')} alt="Second slide"/>
              </Carousel.Item>
              {/* <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_4938.jpeg')} alt="Second slide"/>
              </Carousel.Item> */}
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5304.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5010.jpeg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5297.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5296.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5295.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5305.jpg')} alt="Second slide"/>
              </Carousel.Item>
          </Carousel>
          </div>
          {/* form for sending text messages */}
          <div className='messages'>
             <h3>Send the shop a quick message!</h3>
             <p style={{color: 'white'}}>(please make mention of your email and telephone number if you want to be reached)</p>
             <form>
             <label className='hide-info'>Your phone number: </label><br />
             {/* <input className='hide-info' value={text.recipient} onChange={e => this.setState({ text: { ...text, recipient: e.target.value }})} /><br /> */}
             <div />
             <textarea className='text-area' rows={5} cols={39} placeholder={'Type your message here'}  style = {textArea} value={text.textMessage} onChange={e => this.setState({ text: { ...text, textMessage: e.target.value}})} />
             <br></br>
             <Button type='submit' onClick={this.sendText}>Send text</Button>
             </form>
          </div>
        </div>
        <div id='ref'>
          <h4>Website design and full-stack development by <a href='http://federicosalinas.com/' target='_blank' >Federico Salinas</a></h4>
        </div>
        <div id='business-hours' className='business-hours'>
          <h2>Business Hours</h2>
          <h5>Sunday: CLOSED</h5>
          <h5>Monday: CLOSED</h5>
          <h5>Tuesday & Wednesday 10:30AM-9:30PM</h5>
          <h5>Thursday - Saturday 10:30AM-10:00PM</h5>
        </div>
        <div id='location' className='business-hours'>
          <h2>Address</h2>
          <h5>99 E Park St. Harvard, IL 60033</h5>
            <Map />
        </div>
    </div>
    )
  }
    
}

export default App;
