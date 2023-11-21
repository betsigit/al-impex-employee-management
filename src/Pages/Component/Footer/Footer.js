import React from 'react';
//import avatar from '../../../data/avatar.jpg';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';

const Footer = () => (
  <div className="bg-white mt-24 border-t border-gray-100 ">
    <div className=" dark:bg-gray-800 pt-6">
      <div className="container m-auto space-y-4 px-6 text-gray-600 dark:text-gray-300 md:px-12 lg:px-20">
        <div>
          <div className="mb-3 items-center justify-between gap-6 py-3 sm:flex md:mb-8 md:space-y-4 md:py-0">
            {/* <img className="mt-6   rounded-xl" src={avatar} alt="logo Al-impex"  style={{height:"80px", width:"140px" }} /> */}
            <div className="mt-6 flex flex-col-reverse flex-wrap gap-6 sm:mt-0 sm:flex-row sm:items-center">
              
              <div className="flex gap-6">
                <a href="https://github.com/betsigit/al-impex-employee-management" target="blank" aria-label="github" className="hover:text-primary">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A91531561&keywords=al%20impex%20business%20group&origin=RICH_QUERY_SUGGESTION&position=1&searchId=7283b6d4-5390-4bdf-b4cf-72d282839d21&sid=qzA&spellCorrectionEnabled=false" target="blank" aria-label="twitter" className="hover:text-primary">
                  <FaLinkedin  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:grid-cols-5">
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-gray-200">Services</h6>
                <ul className="mt-4 list-inside space-y-4">
                  
                  <li>
                    <a href="/coffeee" className="transition hover:text-primary">Coffee</a>
                  </li>
                  <li>
                    <a href="/Sunvito" className="transition hover:text-primary">SUNVITO Oil</a>
                  </li>
                  
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-gray-200">Partners</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a href="/aau" className="transition hover:text-primary">AAU</a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-gray-200">Al-impex</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a href="/aboutus" className="transition hover:text-primary">About Us</a>
                  </li>
                  
                  <li>
                  </li>
                  <li>
                    <a href="/faq" className="transition hover:text-primary">FAQ</a>
                  </li>
                  
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-3 md:col-span-2">
                <h6 className="text-lg font-medium text-gray-700 dark:text-gray-200">Contact</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a href="tel:+243996660436" className="transition hover:text-primary"
                    >+251-11-663-4400</a>
                  </li>
                  <li>
                    <a href="mailto:Al-impex@gmail.com" className="transition hover:text-primary"
                    >Info@al-impex.com</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="flex justify-between border-t border-cyan-800 py-4 text-gray-200">
              <span>&copy; Al-impex 2023 <span id="year"></span></span>
              <span>All right reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Footer;
