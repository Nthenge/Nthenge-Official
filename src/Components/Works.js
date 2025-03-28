import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
export const Works = () => {
    return (
        <div>
            <div>
                <header>
                    <p>I build and design stuff</p>
                </header>
                <p>
                    Open source projects, web apps and experimentals
                </p>
                <button>
                    See my work <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>
            <hr/>
            <div>
                <header>
                    <p>I write, <br/> sometimes</p>
                </header>
                <p>
                    About desing,<br/> frontend dev,<br/> learning and life
                </p>
                <button>
                    Read my articles <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>
        </div>
    );
}

