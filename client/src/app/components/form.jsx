import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validator } from "../../utils/validator";
import { createNumber } from "../store/numbers";
const Form = ({ countryCodes }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    countryId: 1,
    bookmark: false,
    value: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data,
      value: Number(data.value),
    };
    dispatch(createNumber(newData));
  };

  const validatorConfig = {
    value: {
      isRequired: {
        message: "Поле номера обязательно для заполнения",
      },
      isNumber: {
        message:
          "Длина номера телефона от 3 до 10 цифр, запрещены любые символы",
      },
    },
  };
  const getInputClasses = () => {
    return "form-control w-50 " + (errors.value ? "is-invalid" : "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" input-group mb-5 w-75 mx-auto">
        <select
          className=" input-group-text w-25  form-select "
          id="countryId"
          name="countryId"
          value={data.countryId}
          onChange={handleChange}
          error={errors?.countryId}
        >
          {countryCodes.map((c) => (
            <option key={c.id} value={c.id}>
              +{c.combination.toString()}
            </option>
          ))}
        </select>

        <input
          autoFocus
          type="text"
          placeholder="Введите номер телефона"
          id="value"
          name="value"
          value={data.value}
          onChange={handleChange}
          error={errors?.value}
          className={getInputClasses()}
        />
        <button type="submit" disabled={!isValid} className=" btn btn-primary ">
          Submit
        </button>
        {errors && (
          <div className="invalid-feedback">{Object.values(errors)[0]}</div>
        )}
      </div>
    </form>
  );
};

export default Form;
