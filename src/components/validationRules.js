export default function validate(values) {
  let errors = {};
  if (!values.message) {
    errors.message = `How can we be at your service? Tell us the details.`;
  }
  if (!values.name) {
    errors.name = `How should we address you?`;
  }
  if (!values.email) {
    errors.email = 'We need your email address to get in touch with you.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = `That email address looks a bit weird.`;
  }
  return errors;
};