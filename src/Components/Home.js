import diamond from "../Icons/diamond.png"
import square from "../Icons/square.png"
import zigzag from "../Icons/zigzag.png"
import menuIcon from "../Icons/menuIcon.png"
import myPic from "../Icons/myPic.jpg"
export const Home = () => {
    return (
        <div className="full_page">
            <section className="hero">
                <span className="image-outsquare"></span>
                <span className="center-image"><img src={myPic} alt="my Image"/></span>
                <div className="section-one">
                    <header>
                        <h1>Abraham</h1>
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
                            <h3>
                                Frontend <br/> Developer.
                            </h3>

                            <p>
                                I like to craft solid and scalable frontend products <br/>   with great user experiences.
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
                        <span><img src = {menuIcon} alt ="menu icon"/></span>
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
                            <span><img src={diamond} alt="diamond"/></span>
                            <span><img src={diamond} alt="diamond"/></span>
                            <span><img src={diamond} alt="diamond"/></span>
                            <span><img src={diamond} alt="diamond"/></span>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}


