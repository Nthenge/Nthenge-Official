import zigzag from "../Icons/zigzag.png"
import myPic from "../Icons/myPic.jpg"
import favicon from "../Icons/favicon.png"
import { StickySidebar } from "./StickySidebar";

export const Home = () => {
    return (
            <div className="hero">
                <span className="image-outsquare"></span>
                <span className="center-image"><img src={myPic} alt="my Image"/></span>
                <section className="section-1">
                    {/* <header>
                        <p>Abr<span><img src={favicon}/></span>ham</p>
                    </header> */}
                        <div className="dots-grid-wrapper">
                            <div className ="dots-grid">
                                {[...Array(144)].map((_, index)=>{
                                    return <div key={index} className="dot"></div>
                                })}
                            </div>
                        </div>
                        
                        <div className="notes">
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

                <div className="section-2">
                    <section>
                        <div className="zigzag-image">
                             <img src={zigzag} alt="zigzag"/>   
                        </div>

                        <div className ="dots-grid">
                                {[...Array(144)].map((_, index)=>{
                                    return <div key={index} className="dot"></div>
                                })}
                        </div>
                    </section>
                </div>
            </div>
    );
}


