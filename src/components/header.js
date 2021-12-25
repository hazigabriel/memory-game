import logo from "./images/header-logo.png"


function Header(props) {
    
    return (
        <section className="headerSection">
            <div className="scoreboardWrapper">
                <h2>Current score: {props.currentScore}</h2>
                <h2>Best score: {props.bestScore}</h2>
            </div>
            <img src={logo} className="headerLogo"></img>
            <div className="gameInfo"><p>?</p></div>
        </section>
    )

}

export default Header