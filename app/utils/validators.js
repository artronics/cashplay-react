const required = (fieldName = 'This field') => (value) => value ? undefined : `${fieldName} is required.`;

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const mobile = (value) =>
  value && !/^([1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 9 digits'
    : undefined;

export {
  required,
  email,
  mobile,
};

