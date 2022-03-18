import Wilder from "./Wilder";

const Wilders = ({ wilders }) => {
  return wilders.map(({ name, skills, city, _id }) => (
    <Wilder id={_id} key={_id} name={name} skills={skills} city={city} />
  ));
};

export default Wilders;
