import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#000000');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <label htmlFor="color"></label>
        <input
          type="color"
          id="color"
          name="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
        />
        <label htmlFor="text"></label>
        <input
          type="text"
          id="text"
          name="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
