import { useState } from "react";

function Experience(props) {
    const [experience, setExperience] = useState([]);
    const [experienceTitle, setExperienceTitle] = useState("");
    const [experienceOrganization, setExperienceOrganization] = useState("");
    const [experienceStart, setExperienceStart] = useState("");
    const [experienceEnd, setExperienceEnd] = useState("");
    const [experienceDesc, setExperienceDesc] = useState("");

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

        setExperienceTitle("");
        setExperienceOrganization("");
        setExperienceStart("");
        setExperienceEnd("");
        setExperienceDesc("");
    }

    const removeEducation = (e) => {
        const removeID = e.target.getAttribute("data-id");
        setExperience(experience => experience.filter(edu => edu.id !== removeID));
    }

    if(props.editable === true) {
        return (
            <div className="experience">
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
                            <div className="exp-title">{exp.title}</div>
                            <div className="exp-org">{exp.organization}</div>
                            <div className="exp-start">{exp.start}</div>
                            <div className="exp-end">{exp.end}</div>
                            <div className="exp-desc">{exp.desc}</div>
                            <button data-id={exp.id} className="remove-btn" onClick={removeEducation}>Remove This Item</button>
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
                            <div className="exp-title">{exp.title}</div>
                            <div className="exp-org">{exp.organization}</div>
                            <div className="exp-start">{exp.start}</div>
                            <div className="exp-end">{exp.end}</div>
                            <div className="exp-desc">{exp.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
} 

export default Experience;