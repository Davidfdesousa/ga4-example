"use client"

export default function MyButton() {
    const sendToDataLayer = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'button_click',
        buttonId: 'saiba-mais-btn',
        buttonText: 'Saiba Mais',
        page: window.location.pathname
      });
      console.log('Evento enviado ao dataLayer');
    };
  
    return (
      <button id="saiba-mais-btn" onClick={sendToDataLayer}>
        Saiba Mais
      </button>
    );
  }