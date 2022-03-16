How to implement Font Awesome into React:

Read the docs:
https://fontawesome.com/v6/docs/web/use-with/react/

1. Install core package:
    - npm i --save @fortawesome/fontawesome-svg-core

2. install FREE icon packages (whichever you need): 
    - npm i --save @fortawesome/free-solid-svg-icons
    - npm i --save @fortawesome/free-regular-svg-icons
    - npm i --save @fortawesome/free-brands-svg-icons !!! we used this one

3. Import FontAwesome component:
    - import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

4. Import icons you want to use from which packet. Take care of the name of the icons.
THere is difference between faFacebook and faFacebookF, or faLinkedinIn.
When you search for the icon you will see the correct suffix.
    - import {
        faFacebookF,
        faTwitter,
        faLinkedinIn,
        faGithub,
        faYoutube,
        faInstagram,
        faSkype,
        faYahoo,
    } from "@fortawesome/free-brands-svg-icons";

5. Use them in your component and add some styling:

    <FontAwesomeIcon className="fa" icon={faFacebookF} />