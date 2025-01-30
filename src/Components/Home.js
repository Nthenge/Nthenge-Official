import square from "../Icons/square.png"
import zigzag from "../Icons/zigzag.png"
import myPic from "../Icons/myPic.jpg"
import favicon from "../Icons/favicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook,faXTwitter, faInstagram, faSlideshare } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
    return (
        <div className="full_page">
            <section className="hero">
                <span className="image-outsquare"></span>
                <span className="center-image"><img src={myPic} alt="my Image"/></span>
                <div className="section-one">
                    <header>
                        <p>Abr<span><img src={favicon}/></span>ham</p>
                    </header>

                    <section>

                        <div className="dots-grid-wrapper">
                            <div className ="dots-grid">
                                {[...Array(144)].map((_, index)=>{
                                    return <div key={index} className="dot"></div>
                                })}
                            </div>
                        </div>
                        
                        <div className="hero-content">
                            <p className="frontend">
                                Fullstack <br/> Developer<span>.</span>
                            </p>

                            <p className="message">
                                I like to craft solid and scalable fullstack products <br/>   with great user experiences.
                            </p>

                            <p className="zigzag-image"><img src ={zigzag} alt ="Zigzag"/></p>
                            
                            <div className="hero-praise">
                                <p>
                                    Highly skilled at progressive <br/> enhancement, design systems <br/> & UI Engineering.
                                </p>

                                <p>
                                    Proven experience building<br/> successful products for clients<br/> across several countries.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="section-two">
                    <header>
                        <span className="Icon"><FontAwesomeIcon icon={faSlideshare}/></span>
                    </header>

                    <section>
                        <div className="zigzag-image">
                             <img src={zigzag} alt="zigzag"/>   
                        </div>

                        <div className ="dots-grid">
                                {[...Array(144)].map((_, index)=>{
                                    return <div key={index} className="dot"></div>
                                })}
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
            </section>
        </div>
    );
}


