import { useState } from "react";

import "../css/Hero.css"

function Hero(props) {
    const [heroNameValue, setHeroName] = useState("Name");
    const [heroPhoneValue, setHeroPhone] = useState("Phone");
    const [heroEmailValue, setHeroEmail] = useState("Email");

    const changeHeroName = (e)  => {
        setHeroName(e.target.value);
    }

    const changeHeroPhone = (e) => {
        setHeroPhone(e.target.value);
    }

    const changeHeroEmail = (e) => {
        setHeroEmail(e.target.value);
    }

    if(props.editable === true) {
        return (
            <div className="hero" id="editable">
                <div className="heading">Personal Details : </div>
                <div className="form">
                    <div className="cv-input-cluster">
                        <label htmlFor="hero-name" className="cv-label">Name : </label>
                        <input 
                            type="text"
                            className="cv-input"
                            onChange={changeHeroName}
                            name="hero-name"
                            value={heroNameValue}
                        />
                    </div>

                    <div className="cv-input-cluster">
                        <label htmlFor="hero-phone" className="cv-label">Phone : </label>
                        <input
                            type="text"
                            className="cv-input"
                            onChange={changeHeroPhone}
                            name="hero-phone"
                            value={heroPhoneValue}
                        />
                    </div>

                    <div className="cv-input-cluster">
                        <label htmlFor="hero-email" className="cv-label">Email : </label>
                        <input 
                            type="text"
                            className="cv-input"
                            onChange={changeHeroEmail}
                            name="hero-email"
                            value={heroEmailValue}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="hero">
                <div className="center">
                    <div className="hero-heading">
                        {heroNameValue}
                    </div>
                </div>
                <div className="bottom">
                    <div className="hero-subheading">
                        Phone : {heroPhoneValue}
                    </div>

                    <div className="hero-subheading">
                        Email : {heroEmailValue}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero