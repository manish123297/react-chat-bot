import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello=()=>{
        const botMessage=createChatBotMessage("Haan bhai bol??");
        setState((prev)=>({ ...prev,messages:[...prev.messages,botMessage]
        }))

    }
    const handleBored=()=>{
        const botMessage=createChatBotMessage("ghumne chale jao kahin??");
        setState((prev)=>({ ...prev,messages:[...prev.messages,botMessage]
        }))

    }

    const handleBankok = () => {
        const botMessage = createChatBotMessage(
          "fir tw yahin jana hoga agr paise h tw🤣",
          {
            widget: 'bankokPicture',
          }
        );
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

      const handleRandomInput=()=>{
        const botMessage=createChatBotMessage("ye kya type kiya tune ,eska matalb nhi samjha mai😥😥!!!");
        setState((prev)=>({ ...prev,messages:[...prev.messages,botMessage]
        }))

      }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello,handleBankok,handleBored,handleRandomInput},
        });
      })}
    </div>
  );
};

export default ActionProvider;