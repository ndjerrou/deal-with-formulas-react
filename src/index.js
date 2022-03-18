import { render } from "react-dom";
import Form from "./components/Form";

const App = () => {
  return <Form />;
};

render(<App />, document.querySelector("#root"));
