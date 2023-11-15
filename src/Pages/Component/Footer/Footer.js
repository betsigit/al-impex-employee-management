import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaWhatsapp,
} from 'react-icons/fa';

const SocialIcon = ({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <Icon className="social-icon hover:text-[#00df9a]" size={30} />
  </a>
);

const Footer = () => {
  const items = [
    { type: 'icon', icon: FaFacebookSquare, link: 'https://facebook.com/your-facebook-page' },
    { type: 'icon', icon: FaInstagram, link: 'https://instagram.com/your-instagram-account' },
    { type: 'icon', icon: FaTwitterSquare, link: 'https://twitter.com/your-twitter-account' },
    { type: 'icon', icon: FaWhatsapp, link: 'https://wa.me/your-whatsapp-number' },
    { type: 'icon', icon: FaGithubSquare, link: 'https://github.com/your-github-account' },
    { type: 'icon', icon: FaDribbbleSquare, link: 'https://dribbble.com/your-dribbble-account' },
  ];

  return (
    <footer className="bg-gray-100 text-black-100 p-4 text-center w-full mx-auto">
      <div>
        <p className="text-base">Contact us: (123) 456-7890</p>
        <p className="text-base">Company: Al-impex</p>
      </div>
      <div className="mt-4 flex justify-center">
        {items.map((item, index) => (
          item.type === 'icon' ? (
            <SocialIcon key={index} icon={item.icon} link={item.link} />
          ) : null
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm">&copy; 2023 Al-impex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
