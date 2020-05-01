import React from 'react';
import '../src/App.css';
import 'bulma/css/bulma.css';
import Logo from '../src/images/eihgth-ball-color.png';



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
        <div >
            <img src={Logo} className='logo'/>
            <h2>99 E Park St, Harvard, IL 60033</h2>
            
        </div>
        <div className='body'>
          <div className='carousel'>
            <img className='body-item' src={require('../src/images/IMG_4946.jpeg')}/>
          </div>
          <div className='body-item'>
             {/* form for sending text messages */}
             <h2>Send the shop a quick message!</h2>
             <label>Your phone number: </label><br />
             <input value={text.recipient} onChange={e => this.setState({ text: { ...text, recipient: e.target.value }})} /><br />
             <div style={spacer} />
             <label>Message</label>
             <textarea rows={3} style = {textArea} value={text.textMessage} onChange={e => this.setState({ text: { ...text, textMessage: e.target.value}})} />
             <button onClick={this.sendText}>Send text</button>
          </div>
          <div className='body-item'>
          <iframe className='body-item' src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=c2FsaW5hc2ZlejAzMjhAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bzNnMWJlY25laThlcDJxdHZybDVkMmxndG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;color=%2333B679&amp;color=%23C0CA33&amp;color=%230B8043" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        
        </div>
    </div>
    )
  }
    
}

export default App;
