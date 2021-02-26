import React, {useState, useEffect} from "react";

export default function Form (props) {
  const initialState = {
    name: '',
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }


  const [form, setForm] = useState(initialState);
  return (
    <form>
      <label>
        Name: <input type='text' name='name' value={form.name} onChange={handleChange}/>
      </label>
    </form>
  );
}