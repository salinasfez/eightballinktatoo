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
  sendText = () => {
    const { text } = this.state;
    //pass varibles in query string from get request
    fetch(`http://localhost:3000/send-text?recipient=${text.recipient}&textMessage=${text.textMessage}`)
    
    .catch(err => console.log(err));
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
        <div className='empty-space'>
            <img src={Logo} className='logo'/>
            <h3>99 E Park St, Harvard, IL 60033</h3>
            
        </div>
        {/* className='body' */}
        <div className='body'>
          {/* carousel start */}
          <div className='caroussel'>
          
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
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_4938.jpeg')} alt="Second slide"/>
              </Carousel.Item>
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
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5303.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5302.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5301.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5300.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5299.jpg')} alt="Second slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={require('../src/images/IMG_5298.jpg')} alt="Second slide"/>
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
    </div>
    )
  }
    
}

export default App;
