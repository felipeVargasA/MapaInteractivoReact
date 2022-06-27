import React from "react";
import { InlineWidget } from "react-calendly";

const Calendario = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/agrosuper-skyview?hide_gdpr_banner=1" pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: true,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}}/>
    </div>
  );
}; 

export default Calendario;
