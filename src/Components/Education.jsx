import { useState } from "react";
import "../css/Education.css"

function Education(props) {
    const [education, setEducation] = useState([]);
    const [educationTitleValue, setEducationTitleValue] = useState("Title");
    const [educationInstitutionValue, setEducationInstitutionValue] = useState("Institution");
    const [educationStartDateValue, setEducationStartDateValue] = useState("Start");
    const [educationEndDateValue, setEducationEndDateValue] = useState("End");
    const [educationDescValue, setEducationDescValue] = useState("Description");


    const changeTitleValue = (e) => {
        setEducationTitleValue(e.target.value);
    }

    const changeInstitutionValue = (e) => {
        setEducationInstitutionValue(e.target.value);
    }

    const changeEducationStartValue = (e) => {
        setEducationStartDateValue(e.target.value);
    }

    const changeEducationEndValue = (e) => {
        setEducationEndDateValue(e.target.value);
    }

    const changeEducationDescValue = (e) => {
        setEducationDescValue(e.target.value);
    }

    const addEducation = () => {
        const newEducation = {
            id : crypto.randomUUID(),
            title : educationTitleValue,
            institution : educationInstitutionValue,
            startDate : educationStartDateValue,
            endDate : educationEndDateValue,
            desc : educationDescValue
        }

        setEducation(education => [...education, newEducation]);

        setEducationTitleValue("Title");
        setEducationInstitutionValue("Institution");
        setEducationStartDateValue("Start");
        setEducationEndDateValue("End");
        setEducationDescValue("Desc");
    }

    const removeEducation = (e) => {
        const removeId = e.target.getAttribute("data-id");
        setEducation(education => education.filter(edu => edu.id !== removeId));
    }

    if(props.editable === true) {
        return (    
            <div className="education" id="editable">
                <div className="heading">Education : </div>
                <div className="education-add">
                    <input type="text" name="education-title" className="cv-input" onChange={changeTitleValue} value={educationTitleValue}/>
                    <input type="text" name="education-institution" className="cv-input" onChange={changeInstitutionValue} value={educationInstitutionValue} />
                    <input type="text" name="education-start" className="cv-input" onChange={changeEducationStartValue} value={educationStartDateValue} />
                    <input type="text" name="education-end" className="cv-input" onChange={changeEducationEndValue} value={educationEndDateValue} />
                    <textarea id="education-desc" className="cv-input" name="education-desc" onChange={changeEducationDescValue} value={educationDescValue} />
                    <button className="submit-btn" onClick={addEducation}>Add New Education</button>
                </div>
                <div className="education-content">
                    {education.map((edu) => (
                        <div key={edu.id} className="edu-item">
                            <div className="top">
                                <div className="main">
                                    <div className="edu-title">{edu.title}</div>
                                    <div className="edu-institution">{edu.institution}</div>
                                </div>
                                <div className="right">
                                    <div className="edu-date">{edu.startDate}-{edu.endDate}</div>
                                </div> 
                            </div>
                            <div className=" desc">    
                                <div className="edu-desc">{edu.desc}</div>
                            </div>
                            <button data-id={edu.id} className="red-btn" onClick={removeEducation}>Remove this item</button>
                        </div>
                    ))}
                </div>
            </div>
        )
        // Make each into inputs
    } else {
        return (<div className="education">
                <div className="education-content">
                    {education.map((edu) => (
                        <div key={edu.id} className="edu-item">
                            <div className="top">
                                <div className="main">
                                    <div className="edu-title">{edu.title}</div>
                                    <div className="edu-institution">{edu.institution}</div>
                                </div>
                                <div className="right">
                                    <div className="edu-date">{edu.startDate}-{edu.endDate}</div>
                                </div> 
                            </div>
                            <div className=" desc">    
                                <div className="edu-desc">{edu.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>)
    }
}

export default Education;