import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>© 2024 Etome | All Rights Reserved</p>
      <p>
        <a href="/terms" className="text-white">
          Terms & Conditions
        </a>{' '}
        |{' '}
        <a href="/privacy" className="text-white">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;