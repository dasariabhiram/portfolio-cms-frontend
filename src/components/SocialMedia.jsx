import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaDownload } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a href="your_resume_download_link" target="_blank" rel="noopener noreferrer" title="Download Resume">
          <FaDownload />
        </a>
    </div>
  
   <div>
    <a href="https://github.com/dasariabhiram" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <BsGithub />
      </a>
   </div>
    
   <div>
      <a href="https://www.linkedin.com/in/dasari-saisri-abhiram/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://twitter.com/DasariAbhiram8" target="_blank" rel="noopener noreferrer" title="Twitter">
        <BsTwitter />
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
