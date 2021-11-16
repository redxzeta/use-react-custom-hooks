import { useState } from "react";
import useForm from "./custom-hooks/useForm";

function App() {
  const init = {
    name: "",
    age: 69,
    size: "M",
  };
  const [display, setDisplay] = useState(false);
  const submitForm = () => setDisplay((x) => !x);
  const { form, handleChange, onSubmit } = useForm(init, submitForm);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <label>{form.name}</label>
      <form onSubmit={onSubmit}>
        <input value={form.name} onChange={handleChange} name="name" />

        <label>{form.age}</label>
        <input value={form.age} onChange={handleChange} name="age" />

        <label>{form.size}</label>
        <input value={form.size} onChange={handleChange} name="size" />
        <button type="submit">SUBMIT</button>
      </form>
      {display && (
        <ol>
          <li>{form.name}</li>
          <li>{form.age}</li>
          <li>{form.size}</li>
        </ol>
      )}
    </div>
  );
}

export default App;
