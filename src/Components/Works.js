import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Works = () => {
    return (
        <div className="works">
            
            {/* Work Card 1 */}
            <div className="work-card">
                <header>
                    <p>I build and design stuff</p>
                </header>
                <p>
                    Open source projects, web apps and experimentals
                </p>
                <button className="work-btn">
                    See my work 
                    <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>

            <hr/>

            {/* Work Card 2 */}
            <div className="work-card">
                <header>
                    <p>I write, <br/> sometimes</p>
                </header>
                <p>
                    About design,<br/> frontend dev,<br/> learning and life
                </p>
                <button className="work-btn">
                    Read my articles 
                    <span className="icon"><FontAwesomeIcon icon={faLongArrowRight}/></span>
                </button>
            </div>

        </div>
    );
}
