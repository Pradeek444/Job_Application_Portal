import "../assets/css/about.scss"
import CountStats from "./Stats";
const About = () => {
    return (
        <div className="wrapper">
            <div className="feature-block-offset">
                <div className="top">
                    <div className="first"></div>
                    <div className="second"></div>
                </div>
                <div className="fb-offset">
                    <div className="fb-offset-inner">
                        <div className="transparent"></div>
                        <div className="image">
                            {/* Your image component or background image */}
                        </div>
                        <div className="content">
                            <h2>RAPID CAREER VENTURES</h2>
                            <p>Our Job Seek is the most dynamic choice in our lineup, ideal for swift and agile exploration on off-road trails or gravel pathways</p>
                            <p>Our advanced platform offers a seamless combination of efficiency, comfort, and resilience, ensuring you have all the tools you need for your job search journey. With our personalized customization options, your job search experience can be as unique and tailored as your career goals.</p>
                            <CountStats/>
                            <div className="button">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
