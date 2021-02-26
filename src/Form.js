import React, {useState, useEffect} from "react";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Name must be at least two characters'),
  size: Yup.string(),
  pepperoni: Yup.boolean(),
  mushrooms: Yup.boolean(),
  peppers: Yup.boolean(),
  pineapple: Yup.boolean(),
  instructions: Yup.string(),
});

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

  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState({
    name: '',
    size: '',
    pepperoni: '',
    mushrooms: '',
    peppers: '',
    pineapple: '',
    instructions: '',
  });

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setForm({ ...form, [name]: updatedInfo });

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(updatedInfo)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors, [name]: ""
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch(err => {
        setErrors({
          ...errors, [name]: err.errors[0]
        });
      });
  }

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setDisabled(!valid);
    });
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name: <input type='text' name='name' value={form.name} onChange={handleChange}/>
        </label>
        <span className='error'>{errors.name}</span>
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
      <p>
        <input type='submit' value='Add to Order' disabled={disabled}/>
      </p>
    </form>
  );
}