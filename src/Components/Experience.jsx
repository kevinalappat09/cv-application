import { useState } from "react";
import "../css/Experience.css"

function Experience(props) {
    const [experience, setExperience] = useState([]);
    const [experienceTitle, setExperienceTitle] = useState("Title");
    const [experienceOrganization, setExperienceOrganization] = useState("Organization");
    const [experienceStart, setExperienceStart] = useState("Start Date");
    const [experienceEnd, setExperienceEnd] = useState("End Date");
    const [experienceDesc, setExperienceDesc] = useState("Description");

    const changeTitle = (e) => {
        setExperienceTitle(e.target.value);
    }

    const changeOrganization = (e) => {
        setExperienceOrganization(e.target.value);
    }

    const changeStart = (e) => {
        setExperienceStart(e.target.value);
    }

    const changeEnd = (e) => {
        setExperienceEnd(e.target.value);
    }

    const changeDesc = (e) => {
        setExperienceDesc(e.target.value);
    }

    const addExperience = () => {
        const newExperience = {
            id : crypto.randomUUID(),
            title : experienceTitle,
            organization : experienceOrganization,
            start : experienceStart,
            end : experienceEnd,
            desc : experienceDesc
        }

        setExperience(experience => [...experience, newExperience]);

        setExperienceTitle("Title");
        setExperienceOrganization("Organization");
        setExperienceStart("Start");
        setExperienceEnd("End");
        setExperienceDesc("Description");
    }

    const removeEducation = (e) => {
        const removeID = e.target.getAttribute("data-id");
        setExperience(experience => experience.filter(edu => edu.id !== removeID));
    }

    if(props.editable === true) {
        return (
            <div className="experience" id="edit">
                <div className="heading">Experience</div>
                <div className="experience-add">
                    <input type="text" name="exp-title" className="cv-input" onChange={changeTitle} value={experienceTitle} />
                    <input type="text" name="exp-org" className="cv-input" onChange={changeOrganization} value={experienceOrganization} />
                    <input type="text" name="exp-start" className="cv-input" onChange={changeStart} value={experienceStart} />
                    <input type="text" name="exp-end" className="cv-input" onChange={changeEnd} value={experienceEnd} />
                    <textarea name="exp-desc" className="cv-input" onChange={changeDesc} value={experienceDesc} />
                    <button className="submit-btn" onClick={addExperience}>Add Experience</button>
                </div>
                <div className="experience-content">
                    {experience.map( (exp) => (
                        <div key={exp.id} className="exp-item">
                            <div className="top">
                                <div className="left">
                                    <div className="exp-title">{exp.title}</div>
                                    <div className="exp-org">{exp.organization}</div>
                                </div>
                                <div className="right">
                                    {exp.start}-{exp.end}
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="exp-desc">{exp.desc}</div>
                            </div>
                            <button data-id={exp.id} className="red-btn" onClick={removeEducation}>Remove This Item</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="experience">
                <div className="experience-content">
                    {experience.map( (exp) => (
                        <div key={exp.id} className="exp-item">
                            <div className="top">
                                <div className="left">
                                    <div className="exp-title">{exp.title}</div>
                                    <div className="exp-org">{exp.organization}</div>
                                </div>
                                <div className="right">
                                    {exp.start}-{exp.end}
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="exp-desc">{exp.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
} 

export default Experience;