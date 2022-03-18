import axios from "axios";

const Wilder = ({ name, city, skills, id }) => {
  const handleClick = () => {
    const url = "http://localhost:9000/api/wilders";
    axios.delete(`${url}/${id}`);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>Delete me</button>
    </div>
  );
};
export default Wilder;
