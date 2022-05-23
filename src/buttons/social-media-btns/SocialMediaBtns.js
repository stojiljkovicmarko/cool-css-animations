import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faYoutube,
  faInstagram,
  faSkype,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";

import "./SocialMediaBtns.css";

const SocialMediaBtns = () => {
  /*   Diffferent way of implementing icons:

    <i class="fa fa-facebook"></i>
    <i class="fa fa-linkedin"></i>
    <i class="fa fa-github"></i>
    <i class="fa fa-skype"></i>
    <i class="fa fa-yahoo"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-youtube"></i> 
    <i class="fa fa-twitter"></i>
    */
  return (
    <>
      <a
        href="https://github.com/stojiljkovicmarko/cool-css-animations/tree/main/src/buttons/social-media-btns"
        rel="noreferrer"
        target="_blank"
        class="ribbon"
      >
        <FontAwesomeIcon className="fa" icon={faGithub} />
      </a>
      <div class="social-media-btns">
        <div class="ribbon-2">Hover for cool animation</div>
        <a href="/#" class="btn facebook">
          <FontAwesomeIcon className="fa" icon={faFacebookF} />
        </a>
        <a href="/#" class="btn twitter">
          <FontAwesomeIcon className="fa" icon={faTwitter} />
        </a>
        <a href="/#" class="btn linkedin">
          <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
        </a>
        <a href="/#" class="btn github">
          <FontAwesomeIcon className="fa" icon={faGithub} />
        </a>
        <a href="/#" class="btn skype">
          <FontAwesomeIcon className="fa" icon={faSkype} />
        </a>
        <a href="/#" class="btn yahoo">
          <FontAwesomeIcon className="fa" icon={faYahoo} />
        </a>
        <a href="/#" class="btn instagram">
          <FontAwesomeIcon className="fa" icon={faInstagram} />
        </a>
        <a href="/#" class="btn youtube">
          <FontAwesomeIcon className="fa" icon={faYoutube} />
        </a>
      </div>
    </>
  );
};

export default SocialMediaBtns;
