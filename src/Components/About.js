import zigzag from "../Icons/zigzag.png"
import favicon from "../Icons/favicon.png"
export const About = () => {
    return (
        <div className="aboutMe">
            <section className="section-onee">
                <header>
                    <p>Abr<span><img src={favicon}/></span>ham</p>
                </header>
                <div>
                    <div className ="dottts-grid">
                        {[...Array(144)].map((_, index)=>{
                        return <div key={index} className="dottt"></div>
                        })}
                    </div>
                    <header>
                        <p>
                            Desing
                        </p>
                    </header>
                    <p>
                    I'm probably not the typical designer positioned behind an<br/>
                    Illustrator artboard adjusting pixels, but I design. Immersed in <br/>
                    stylesheets tweaking font sizes and contemplating layouts is <br/>
                    where you'll find me (~_^). I'm committed to creating fluent user <br/>
                    experiences while staying fashionable.
                    </p>
                    <p>

                    </p>
                    <div className="zigzag-image">
                        <img src={zigzag} alt="zigzag"/>   
                    </div>
                </div>
            </section>

            <section className="section-twoo">
                <div className ="dotts-grid">
                    {[...Array(144)].map((_, index)=>{
                    return <div key={index} className="dott"></div>
                    })}
                </div>
                <header>
                    <p>
                        Engineering
                    </p>
                </header>
                <p>
                    In building JavaScript applications, I'm equipped with just the <br/>right tools, and can absolutely function independently of them <br/>to deliver fast, resilient solutions optimized for scale — <br/>performance and scalabilty are priorities on my radar.
                </p>
            </section>
            
        </div>
    );
}

