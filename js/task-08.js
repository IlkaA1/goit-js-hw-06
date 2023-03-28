const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formIformaton = {
    email: email.value,
    password: password.value,
  };

  console.log(formIformaton);
  evt.currentTarget.reset();
}
