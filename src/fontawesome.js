import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faUserSecret,
    faGlobeAfrica,
    faGlobe,
    faFolderOpen,
    faFolderClosed,
    faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


library.add(faUserSecret, faGithub, faGlobeAfrica, faGlobe, faFolderOpen, faFolderClosed, faArrowRightFromBracket);

export { FontAwesomeIcon };

