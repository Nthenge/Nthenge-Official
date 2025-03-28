import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook,faXTwitter, faInstagram, faSlideshare } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
    return (
        <div>
            <div>
                <section>
                    <h6>SAY HELLO</h6>
                    <p>hello@abraham.dev</p>
                    <p>t.me/abraham</p>
                </section>
                <section>
                    <ul>
                        <li>My work</li>
                        <li>My shelf</li>
                        <li>My Resume</li>
                    </ul>
                </section>
            </div>
            <hr/>
            <div>
                <p>Abraham Mutinda 2025</p>
                <span className="icon"><FontAwesomeIcon icon={faGithub} /></span>
                <span className="icon"><FontAwesomeIcon icon={faFacebook}/></span>
                <span className="icon"><FontAwesomeIcon icon={faXTwitter}/></span>
                <span className="icon"><FontAwesomeIcon icon={faInstagram}/></span>
            </div>
        </div>
    );
}

