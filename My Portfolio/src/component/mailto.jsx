import React from 'react';

function OpenGmailButton() {
  const handleOpenGmail = () => {
    const subject = 'Contacting Mr. Theodore';
    const body = 'I clicked the link on your portfolio wanted a collab...';
    const recipientEmail = 'theodoreagbozo87@gmail.com'; 
    const senderEmail = 'your@gmail.com';

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${senderEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleOpenGmail}>Contact Me</button>
  );
}

export default OpenGmailButton;
