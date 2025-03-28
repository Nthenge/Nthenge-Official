import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <div>
            <div>
                <header>
                    <p>Send me a message!</p>
                </header>
                <p>
                    Got a question or proposal, or just want
                    to say hello? Go ahead.
                </p>
            </div>
            <div>
                <label>Your name</label>
                <input type="text" placeholder="Enter your name"/>

                <label>Email address</label>
                <input type="text" placeholder="Enter your email address"/>


                <div>
                    <label>Your Message</label>
                    <input 
                        type="text"
                        placeholder="Hi, I think we need a  design system for our products at Company N, how soon can you hop on to discuss this?"
                    />
                </div>

                <button>
                    Read my articles <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>
        </div>
    );
}

