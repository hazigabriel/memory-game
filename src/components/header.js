import logo from "./images/header-logo.png"


function Header(props) {
    function showHelpCard() {
        document.querySelector(".helpWrapper").style.display = "flex";
    }
    return (
        <section className="headerSection">
            <div className="scoreboardWrapper">
                <h2>Current score: {props.currentScore}</h2>
                <h2>Best score: {props.bestScore}</h2>
            </div>
            <div className="headerLogoWrapper">
                <img src={logo} alt="logo" className="headerLogo"></img>
            </div>
            <div className="gameInfo" onClick={showHelpCard}><p>?</p></div>
        </section>
    )

}

export default Header