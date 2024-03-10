import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './botConfigs/config';
import MessageParser from './botConfigs/mesageParser';
import ActionProvider from './botConfigs/actionProvider';

function App() {
  return (
    <div style={{background:"#efefef",height:"100vh"}}>
      <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      headerText='Bhai ka Bot'
      placeholderText='yahan likh jo bhi likhna h'
>

      </Chatbot>
     
     </div>
  );
}

export default App;
