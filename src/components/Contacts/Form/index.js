import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  // console.log(addContact);
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact((prev) => {
      return [...prev, form];
    });
    // console.log(form);
    // setForm(initialFormValues);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Fullname"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            type="number"
            name="phone_number"
            value={form.phone_number}
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
