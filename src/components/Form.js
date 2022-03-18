import { useState } from "react";
import axios from "axios";
import Wilders from "./Wilders";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    skill: "",
    inProgress: false,
  });

  const [wilders, setWilders] = useState([]);

  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    const { value, checked, name, type } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // add the current skill to the skills state
  const handleClick = () => {
    let newSkills = [];
    if (!skills.includes(formData.skill.toLowerCase())) {
      setSkills([
        ...skills,
        { label: formData.skill.toLowerCase(), votes: 10 },
      ]);

      newSkills = [
        ...skills,
        { label: formData.skill.toLowerCase(), votes: 10 },
      ];
    }

    setFormData((prevState) => ({
      ...prevState,
      skills: newSkills,
      skill: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:9000/api/wilders";

    delete formData.skill;

    const { data } = await axios.post(url, formData);

    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom du Wilder</label>
          <input
            id="firstName"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">Ville</label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <input
          id="inProgress"
          name="inProgress"
          checked={formData.inProgress}
          onChange={handleChange}
          type="checkbox"
        />
        <label>J'étudie encore</label>
        <div>
          <label htmlFor="skill">Add a skill</label>
          <input
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            type="text"
          />
          <button type="button" onClick={handleClick}>
            Save this skill
          </button>
        </div>
        <div>
          {!!skills.length &&
            skills.map(({ label }) => (
              <button type="button" key={label}>
                {label}
              </button>
            ))}
        </div>
        <div>
          <button>Add a wilder</button>
        </div>
      </form>

      <Wilders wilders={wilders} />
    </>
  );
};

export default Form;

// document.querySelector('form').addEventListener('submit', (e)=>{
//     e.target.elements.nameElement.value
// })
