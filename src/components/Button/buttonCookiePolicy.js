<a href="" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>

import React from 'react';

const PrivacyPolicyButton = () => {
  const handleClick = () => {
    window.open("https://www.iubenda.com/privacy-policy/86358183/cookie-policy", "_blank");
  };

  return (
    <button 
      onClick={handleClick} 
      className="text-light border border-solid border-light px-4 py-2 rounded-md"
      title="Cookie Policy"
    >
      Cookie Policy
    </button>
  );
};

export default PrivacyPolicyButton;