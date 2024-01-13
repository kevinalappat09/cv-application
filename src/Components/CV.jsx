import { useState } from "react";
import Hero from "./Hero";
import Education from "./Education";
import Experience from "./Experience";

import "../css/CV.css"

function CV_application() {
    const [mode, setMode] = useState("Edit");

    const toggleMode = () => {
        if(mode === "Edit") {
            setMode("Preview");
        } else if(mode === "Preview") {
            setMode("Edit");
        }
    }

    if(mode === "Edit") {
        return (
            <div className="cv-application">
                <div className="nav">
                    <div className="heading">CV Application</div>
                    <div className="sub-heading">Edit Mode</div>
                    <button className="nav-button" id="btn-edit" onClick={toggleMode}>Switch To Preview</button>
                </div>
                <div className="main-content">
                    <Hero  editable={true}/>
                    <Education editable={true} />
                    <Experience editable={true} />
                </div>
            </div>
        )
    } else if(mode === "Preview") {
        return (
            <div className="cv-application">
                <div className="nav">
                    <div className="heading">CV Application</div>
                    <div className="sub-heading">Preview Mode</div>
                    <button className="nav-button" id="btn-preview" onClick={toggleMode}>Switch To Edit</button>
                </div>
                <div className="main-content">
                    <Hero editable={false} />
                    <Education editable={false} />
                    <Experience editable={false} />
                </div>
            </div>
        )
    }
}

export default CV_application;