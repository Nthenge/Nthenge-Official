import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <div className="contact">
            
            {/* Left Section */}
            <div className="contact-info">
                <header>
                    <p>Send me a message!</p>
                </header>
                <p>
                    Got a question or proposal, or just want
                    to say hello? Go ahead.
                </p>
            </div>

            {/* Right Section */}
            <div className="contact-form">
                <label>Your name</label>
                <input className="contact-input" type="text" placeholder="Enter your name"/>

                <label>Email address</label>
                <input className="contact-input" type="text" placeholder="Enter your email address"/>

                <div>
                    <label>Your Message</label>
                    <textarea 
                        className="contact-textarea"
                        placeholder="Hi, I think we need a design system for our products at Company N, how soon can you hop on to discuss this?"
                    ></textarea>
                </div>

                <button className="contact-btn">
                    Send Message 
                    <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>
        </div>
    );
}
