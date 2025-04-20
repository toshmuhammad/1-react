import light from "../img/light.svg"
import hero from "../img/hero.svg"
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
            </main>
        </div>
    )
}
