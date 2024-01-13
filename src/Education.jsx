import { useState } from "react";

function Education(props) {
    const [education, setEducation] = useState([]);
    const [educationTitleValue, setEducationTitleValue] = useState("");
    const [educationInstitutionValue, setEducationInstitutionValue] = useState("");
    const [educationStartDateValue, setEducationStartDateValue] = useState("");
    const [educationEndDateValue, setEducationEndDateValue] = useState("");
    const [educationDescValue, setEducationDescValue] = useState("");


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

        setEducationTitleValue("");
        setEducationInstitutionValue("");
        setEducationStartDateValue("");
        setEducationEndDateValue("");
        setEducationDescValue("");
    }

    const removeEducation = (e) => {
        const removeId = e.target.getAttribute("data-id");
        setEducation(education => education.filter(edu => edu.id !== removeId));
    }

    if(props.editable === true) {
        return (    
            <div className="education">
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
                            <div className="edu-title">{edu.title}</div>
                            <div className="edu-institution">{edu.institution}</div>
                            <div className="edu-startdate">{edu.startDate}</div>
                            <div className="edu-enddate">{edu.endDate}</div>
                            <div className="edu-desc">{edu.desc}</div>
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
                            <div className="edu-title">{edu.title}</div>
                            <div className="edu-institution">{edu.institution}</div>
                            <div className="edu-startdate">{edu.startDate}</div>
                            <div className="edu-enddate">{edu.endDate}</div>
                            <div className="edu-desc">{edu.desc}</div>
                        </div>
                    ))}
                </div>
            </div>)
    }
}

export default Education;