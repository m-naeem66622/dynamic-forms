import { useEffect, useState } from "react";
import "./App.css";
import NavButton from "./components/NavButton";
import NavTabPane from "./components/NavTabPane";

function App() {
  const [formsData, setFormsData] = useState([
    {
      id: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  ]);
  const [activeForm, setActiveForm] = useState(formsData[0].id);
  const [errors, setErrors] = useState([]);

  const handleActiveForm = (id) => {
    setActiveForm(id);
  };

  const handleFetchIndex = (classAttr) => {
    const pattern = /form-index-(\d+)/;
    const match = pattern.exec(classAttr);
    return Number(match[1]);
  };

  const handleOnChange = (e) => {
    const { name, value, className } = e.target;
    const formIndex = handleFetchIndex(className);

    setFormsData((prevState) =>
      prevState.map((formData, i) => {
        if (i === formIndex) {
          return {
            ...formData,
            [name]: value,
          };
        }
        return formData;
      })
    );
  };

  const handleOnClickAddForm = () => {
    setFormsData((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
    ]);
  };

  const handleOnClickRemoveForm = (id) => {
    let currentIndex = formsData.findIndex((formData) => formData.id === id);

    if (currentIndex === 0) {
      setActiveForm(formsData[1].id);
    } else {
      setActiveForm(formsData[currentIndex - 1].id);
    }

    setFormsData((prevState) =>
      prevState.filter((formData) => formData.id !== id)
    );
  };

  const errorHandler = () =>
    formsData.map((formData, index) => {
      const { id, firstName, lastName, email, phoneNumber, password } =
        formData;
      let obj = {
        id,
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        password: false,
      };

      if (!firstName.trim()) {
        obj.firstName = true;
      }

      if (!lastName.trim()) {
        obj.lastName = true;
      }

      if (
        !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
          email.trim()
        )
      ) {
        obj.email = true;
      }

      if (!phoneNumber.trim()) {
        obj.phoneNumber = true;
      }

      if (password.trim().length < 8) {
        obj.password = true;
      }

      return obj;
    });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setErrors(errorHandler(formsData));
  };

  return (
    <div className="App mx-5 mt-5">
      <form onSubmit={handleOnSubmit} className="position-relative">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {formsData.map((formData, index) => (
            <NavButton
              key={formData.id}
              formData={formData}
              index={index}
              activeForm={activeForm}
              handleActiveForm={handleActiveForm}
              handleOnClickRemoveForm={handleOnClickRemoveForm}
            />
          ))}
          <li className="nav-item">
            <button
              onClick={handleOnClickAddForm}
              type="button"
              className="nav-link"
            >
              Add Form
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {formsData.map((formData, index) => (
            <NavTabPane
              key={formData.id}
              handleOnChange={handleOnChange}
              formData={formData}
              activeForm={activeForm}
              errors={errors}
              index={index}
            />
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary position-absolute submitFormBtn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
