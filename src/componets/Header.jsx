import light from "../img/light.svg"
import hero from "../img/hero.svg"
import speaking from "../img/speaking.svg"
import writing from "../img/writing.svg"
import reading from "../img/reading.svg"
import aboutus from "../img/about-us.svg"
import selfstudy from "../img/self-study.svg"
import live from "../img/live.svg"
import personal from "../img/personal.svg"
import contact from "../img/contact.svg"
import "./Header.css";
export default function Header() {
    return (
        <div>
            <div className="hdm">
                <h2 className="brit">Brit<span className="lex">lex</span></h2>
                <ul className="hdr">
                    <li>
                        <a className="qora" href="#">Home</a>
                    </li>
                    <li>
                        <a className="qora" href="#">Skills</a>
                    </li>
                    <li>
                        <a className="qora" href="#">About Us</a>
                    </li>
                    <li>
                        <a className="qora" href="#">Pricing</a>
                    </li>
                    <li>
                        <a className="qora" href="#">Contacts</a>
                    </li>
                </ul>
                <button className="btn">Let’s Talk</button>
            </div>

            <main className="main">
                <div className="sahifa">
                    <div>
                        <div className="img">
                            <h1 className="learn">Learn <br /> Any Foreign <br /> Language</h1>
                            <img src={light} alt="#" />
                        </div>
                        <p className="after">With our teachers who write a program for <br />
                            each student, you will be able to make your <br />
                            first sketch after the first lesson.</p>
                        <button className="get">Get started</button>
                    </div>
                    <div className="hero">
                        <img src={hero} alt="#" />
                    </div>
                </div>
                <h2 className="skills">Skills</h2>



                <div className="uzb">
                    <div className="card1">
                        <img src={speaking} alt="#" />
                        <div className="fale">
                            <h2 className="spek">Speaking</h2>
                            <p className="pr">Improve your English skills and confidence. <br />
                                Live classes and interactive lessons online. <br />
                                20% extra free for a limited time only</p>
                            <p className="pp">Learn English online and improve your <br />
                                skills through our high-quality courses <br />
                                and resources – all designed for adult <br /> language learners.</p>
                            <button className="btm">Learn more</button>
                        </div>
                    </div>

                    <div className="card2">
                        <img src={writing} alt="" />
                        <h2 className="writing">Writing</h2>
                        <button className="bti">Learn more</button>
                    </div>

                    <div className="card3">
                        <img src={reading} alt="#" />
                        <h2 className="reading">Reading</h2>
                        <p className="pl">perception and response actions of the user <br />
                            resulting from the use and/or upcoming use <br />
                            of the product, system or service</p>
                        <button className="btl">Learn more</button>
                    </div>
                    <div></div>
                </div>



                <div className="doler">
                    <div className="xat">
                        <h2 className="about">About Us</h2>
                        <p className="the">The model offers a framework for discussing problems related <br /> to the user's experience, as well as possible ways and means of <br /> solving them. Application development begins at the top level <br />(strategy), where the future software product is described quite <br /> abstractly from the point of view of the expectations of both <br /> users and the customer.</p>
                        <div className="narx">
                            <div>
                                <h2 className="cum">800</h2>
                                <p className="suma">Pupils</p>
                            </div>
                            <div>
                                <h2 className="cum">18</h2>
                                <p className="suma">Teachers</p>
                            </div>
                            <div>
                                <h2 className="cum">6</h2>
                                <p className="suma">Foreign languages</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus">
                        <img src={aboutus} alt="#" />
                    </div>
                </div>



                <h2 className="pricing">Pricing</h2>



                <div className="kasb">
                    <div>
                        <img src={selfstudy} alt="#" />
                        <h2 className="self">Self-study online course</h2>
                        <p className="start">Start learning English online in live classes <br />
                            with qualified EC teachers and students <br />
                            from all over the world.</p>
                        <button className="per">
                            <h3> £5.99</h3>
                            <p> per month</p>
                        </button>
                    </div>
                    <div>
                        <img src={live} alt="#" />
                        <h2 className="live">Live online classes</h2>
                        <p className="group">Interactive group classes with expert <br />
                            teachers. Free 7-day trial</p>
                        <button className="pe">
                            <h3> £12.99</h3>
                            <p> per month</p>
                        </button>
                    </div>
                    <div>
                        <img src={personal} alt="#" />
                        <h2 className="personal">Personal Tuition</h2>
                        <p className="online">Online one-to-one English tutoring – <br /> enjoy <br />
                            our first session for only $1</p>
                        <button className="month">
                            <h3> £20.99</h3>
                            <p> per month</p>
                        </button>
                    </div>
                </div>



                <div className="contact">
                    <div className="image">
                        <img src={contact} alt="" />
                    </div>
                    <div className="login">
                        <h2 className="us">Contact Us</h2>
                        <p className="paragrph">Discover your current English level by taking our free online English test.Sign <br /> up to our newsletter for learning tips and free resources</p>

                        <input className="input" placeholder="Enter Your E-mail" type="text" />
                        <button className="button">Subscribe</button>
                    </div>
                </div>

                <div className="chizq"></div>



                <footer className="footer">
                    <div>
                        <h2 className="brit">Brit<span className="lex">lex</span></h2>
                    </div>
                    <div className="nik">
                        <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
                    </div>
                </footer>
            </main>
        </div>
    )
}
