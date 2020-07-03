import React from 'react';
import '../src/App.css';
import 'bulma/css/bulma.css';
import Logo from '../src/images/eihgth-ball-color.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Vatos from '../src/images/vatos_locos.svg';




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
  // handleMenu = () => {
  //   const menuButton = document.querySelector('.menu-button');
  //   let menuOpen = false;
  //   menuButton.addEventListener('click', () => {
  //     if (!menuOpen) {
  //       menuButton.classList.add('open');
  //       menuOpen = true;
  //     }
  //     else {
  //       menuButton.classList.remove('open');
  //       menuOpen = false;
  //     }
  //   })
  // }
  // handleDrop = () => {
  //   document.getElementById("menu-button").classList.toggle("show");
  //   window.onclick = (event) => {
  //       if (!event.target.matches('.dropbtn')) {
  //         const dropdowns = document.getElementsByClassName("dropdown-content");
  //         let i;
  //         for (i = 0; i < dropdowns.length; i++) {
  //           const openDropdown = dropdowns[i];
  //           if (openDropdown.classList.contains('show')) {
  //             openDropdown.classList.remove('show');
  //           }
  //         }
  //       }
  //     }
  // }
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
         <div className='dropbtn'></div>
         <div className="dropdown">
                    <div onClick={this.handleDrop} className='dropbtn menu-button-burger'></div>
                    {/* <button onClick={this.handleDrop} className="dropbtn">Menu</button> */}
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">Home</a>
                        <a href="#arte">Arte</a>
                        <a href='#social-media'>Social Media</a>
                    </div>
        </div>
        <div className='empty-space'>
            <img src={Logo} className='logo'/>
            <h3>99 E Park St. Harvard, IL 60033</h3>
            
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
          {/* start of calendar */}
          {/* <div className='calendar'>
            <h2>Book a free, in person, estimate!</h2>
            <iframe  src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=c2FsaW5hc2ZlejAzMjhAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bzNnMWJlY25laThlcDJxdHZybDVkMmxndG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%23C0CA33&amp;color=%230B8043" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div> */}
        </div>
          <div id='social-media' className='icon-container'>
              <img src={require('../src/images/icons/fb.svg')} alt={'facebook'} className='icons' onClick={() => this.facebookTab()}/>
              <img src={require('../src/images/icons/ig.svg')} alt={'ig'} className='icons' onClick={() => this.instagramTab()}/>
              <img src={require('../src/images/icons/email.svg')} alt={'email'} className='icons' onClick={() => this.emailTab()}/>

          </div>
    </div>
    )
  }
    
}

export default App;
