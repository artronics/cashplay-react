const required = (fieldName = 'This field') => (value) => value ? undefined : `${fieldName} is required.`;

export {
  required,
};

