const tooglePassword = () => {
  const input = document.querySelector('#password-input');
  input.type === 'password' ? input.type = 'text' : input.type = 'password';
};
