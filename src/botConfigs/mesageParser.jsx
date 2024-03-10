import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("bhai")) {
      actions.handleHello();
    } else if (message.includes("bore ho rha mai bhut")) {
        actions.handleBored();
      }
     else if (message.includes("almost saare jagah chennai me ja chuka hu")) {
      actions.handleBankok();
    } else {
      actions.handleRandomInput();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
