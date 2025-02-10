import zigzag from "../Icons/zigzag.png"
import square from "../Icons/square.png"
import { FaKey } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook,faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
export const About = () => {
    return (
        <div className="aboutMe">
            <section className="section-onee">
                <header>
                    <p className="fakey"><FaKey/></p>                
                </header>
                <div className="abouts">
                    <header>
                        <p> 
                            Desing
                        </p>
                    </header>
                    <div className ="dottts-grid">
                        {[...Array(144)].map((_, index)=>{
                        return <div key={index} className="dottt"></div>
                        })}
                    </div>
                    
                    <div className="notesaboutme">
                        <p>
                        I'm probably not the typical designer positioned behind an<br/>
                        Illustrator artboard adjusting pixels, but I design. Immersed in <br/>
                        stylesheets tweaking font sizes and contemplating layouts is <br/>
                        where you'll find me (~_^). I'm committed to creating fluent user <br/>
                        experiences while staying fashionable.
                        </p>
                    </div>
                    <div className ="dotttss-grid">
                        {[...Array(5)].map((_, index)=>{
                        return <div key={index} className="dotttt"></div>
                        })}
                    </div>
                    <div className="zigzag-image">
                        <img src={zigzag} alt="zigzag"/>   
                    </div>
                </div>
            </section>

            <section className="section-twoo">
                <div className="grid-dots">
                    <div className ="dotttss-grid">
                        {[...Array(5)].map((_, index)=>{
                        return <div key={index} className="dotttt"></div>
                        })}
                    </div>
                    <div className ="dotts-grid">
                        {[...Array(144)].map((_, index)=>{
                        return <div key={index} className="dott"></div>
                        })}
                    </div>
                </div>
                <div className="notesaboutme">
                    <header>
                        <p>
                            Engineering
                        </p>
                    </header>
                    <p>
                        In building JavaScript applications, I'm equipped with just the <br/>right tools, and can absolutely function independently of them <br/>to deliver fast, resilient solutions optimized for scale — <br/>performance and scalabilty are priorities on my radar.
                    </p>
                </div>

                <div className="shapes">
                    <span><img src={square} alt="square"/></span>
                    <span className="Icon"><FontAwesomeIcon icon={faGithub} /></span>
                    <span className="Icon"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="Icon"><FontAwesomeIcon icon={faXTwitter}/></span>
                    <span className="Icon"><FontAwesomeIcon icon={faInstagram}/></span>
                </div>
            </section>
            
        </div>
    );
}

