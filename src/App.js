import React from 'react';
import '../src/App.css';
import 'bulma/css/bulma.css';
import Logo from '../src/images/eihgth-ball-color.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';





class App extends React.Component{
  state = {
    text: {
      recipient: '',
      textMessage: ''
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
         {/* <div className='dropbtn'></div> */}
         
         <div className="dropbtn">
                    <div onClick={this.handleDrop} className='dropbtn menu-button-burger'></div>
                    {/* <button onClick={this.handleDrop} className="dropbtn">Menu</button> */}
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#business-hours">Hours</a>
                        <a href="#arte">Arte</a>
                        <a href='#social-media'>Social Media</a>
                    </div>
        </div>
        <div className='empty-space'>
            <img src={Logo} className='logo'/>
        </div>
        </div>
        <div className='welcome'>
          <div>
            <section>
              <h1 id='welcome-header'>WELCOME TO 8BALL INK TATTOO</h1>
              <h3 id='established'>|  ESTABLISHED 2020  |</h3>
            </section>
          </div>
          <div>
            <article>
                 Ideas become dreams. Dreams become reality. ILL State Ink bloomed from the idea of a trio of artists who wanted to open a tattoo studio dedicated to quality tattooing and personally attentive customer service. You'll find no "tattitudes" or egos from the artists at ILL State Ink. Our goal is to provide clients with a unique tattoo as original as a custom piece of art. Our studio is located at 3088 N. Milwaukee Ave, in the Avondale neighborhood 
            </article>
          </div>
        </div>
        <div id='social-media' className='icon-container'>
              <img src={require('../src/images/icons/fb.svg')} alt={'facebook'} className='icons' onClick={() => this.facebookTab()}/>
              <img src={require('../src/images/icons/ig.svg')} alt={'ig'} className='icons' onClick={() => this.instagramTab()}/>
              <img src={require('../src/images/icons/email.svg')} alt={'email'} className='icons' onClick={() => this.emailTab()}/>
          </div>
        {/* className='body' */}
        <div className='body'>
          {/* carousel start */}
          <div className='caroussel' id='arte'>
          
          <Carousel>
              <Carousel.Item className='carousel-item' >
                <img  className="d-block w-100" src={require('../src/images/IMG_4946.jpeg')} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item' >
                <img  className="d-block w-100" src={require('../src/images/IMG_0872.jpeg')} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item >
                <img className="d-block w-100" src={require('../src/images/IMG_0741.jpeg')} alt="Second slide"/>
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
              {/* <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5296.jpg')} alt="Second slide"/>
              </Carousel.Item> */}
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5295.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5305.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5301.jpg')} alt="Second slide"/>
              </Carousel.Item>
          </Carousel>
          </div>
          {/* form for sending text messages */}
          <div className='messages'>
             <h3>Send the shop a quick message!</h3>
             <p style={{color: 'white'}}>(please make mention of your email and telephone number if you want to be reached)</p>
             <form>
             <label className='hide-info'>Your phone number: </label><br />
             <input className='hide-info' value={text.recipient} onChange={e => this.setState({ text: { ...text, recipient: e.target.value }})} /><br />
             <div />
             <textarea rows={5} cols={39} placeholder={'Type your message here'}  style = {textArea} value={text.textMessage} onChange={e => this.setState({ text: { ...text, textMessage: e.target.value}})} />
             <br></br>
             <Button type='submit' onClick={this.sendText}>Send text</Button>
             </form>
          </div>
        </div>
        <div id='business-hours' className='business-hours'>
          <h2>Address:</h2>
          <h5>99 E Park St. Harvard, IL 60033</h5>
          <h2>Business Hours</h2>
          <h5>Monday & Tuesday 6pm-11pm</h5>
​          <h5>Wednesday through Saturday 1pm-11pm</h5>
          <h5>Sunday: CLOSED</h5>
        </div>
          <div id='back-to-top'><h5><a href='#'>back to top</a></h5></div>
    </div>
    )
  }
    
}

export default App;
