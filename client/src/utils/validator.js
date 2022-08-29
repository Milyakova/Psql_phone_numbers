export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (data.trim() === "") return config.message;
        break;
      case "isNumber":
        const regExp = /^\d{3,10}$/g;
        if (!regExp.test(data)) return config.message;
        break;
      default:
        break;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
