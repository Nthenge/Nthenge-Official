import square from "../Icons/square.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook,faXTwitter, faInstagram, faSlideshare } from '@fortawesome/free-brands-svg-icons';

export const StickySidebar = () => {
    return (
        <div className="sidebar">
            <header>
                <span className="toogle"><FontAwesomeIcon icon={faSlideshare}/></span>
            </header>
            <div className="media">
                <span><img src={square} alt="square"/></span>
                <span className="icon"><FontAwesomeIcon icon={faGithub} /></span>
                <span className="icon"><FontAwesomeIcon icon={faFacebook}/></span>
                <span className="icon"><FontAwesomeIcon icon={faXTwitter}/></span>
                <span className="icon"><FontAwesomeIcon icon={faInstagram}/></span>
            </div>
        </div>
    );
}

