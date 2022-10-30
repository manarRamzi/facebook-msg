import logo from './logo.svg';
import './App.css';
import { MessengerChat, showMessenger, hideMessenger, showDialog, hideDialog } from 'react-messenger-customer-chat';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MessengerCustomerChat
    pageId="107487991682672"
    appId="984797232364697" 
  
  />
     
      </header>
    </div>
  );
}

export default App;
