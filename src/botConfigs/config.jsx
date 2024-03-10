import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../widgets/dogPictures';

const botName = 'Bhai ka bot';

const config = {
  initialMessages: [createChatBotMessage(`Ram Ram saaryanu,  ${botName} ke aur se` )],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1e414e',
    },
    chatButton: {
      backgroundColor: '#408568',
    },
  },
  widgets: [
    {
      widgetName: 'bankokPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;