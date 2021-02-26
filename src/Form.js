import React, {useState, useEffect} from "react";

export default function Form (props) {
  const initialState = {
    name: '',
    size: '',
    pepperoni: false,
    mushrooms: false,
    peppers: false,
    pineapple: false,
    instructions: '',
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: updatedInfo });
  }


  const [form, setForm] = useState(initialState);
  return (
    <form>
      <p>
        <label>
          Name: <input type='text' name='name' value={form.name} onChange={handleChange}/>
        </label>
      </p>
      <p>
        <label>
          Pizza size:
          <select name='size' value={form.size} onChange={handleChange}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
      </p>
      <p>
        Toppings:
        <label>
          <input type='checkbox' name='pepperoni' checked={form.pepperoni} onChange={handleChange}/>Pepperoni
        </label>
        <label>
          <input type='checkbox' name='mushrooms' checked={form.mushrooms} onChange={handleChange}/>Mushrooms
        </label>
        <label>
          <input type='checkbox' name='peppers' checked={form.peppers} onChange={handleChange}/>Peppers
        </label>
        <label>
          <input type='checkbox' name='pineapple' checked={form.pineapple} onChange={handleChange}/>Pineapple
        </label>
      </p>
      <p>
        <label>
          Special Instructions:<br/>
          <textarea name='instructions' value={form.instructions} onChange={handleChange}></textarea>
        </label>
      </p>
    </form>
  );
}