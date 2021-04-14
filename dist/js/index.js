/* eslint-disable */
const ValidateForm = (function () {
  const inputPassword = document.getElementById('password-input');
  const inputCountry = document.getElementById('country-select');
  const inputName = document.getElementById('full-name');
  const errName = document.querySelector('.form__error--name');
  const errPass = document.querySelector('.form__error--password');
  const errCountry = document.querySelector('.form__error--country');
  const termCheckbox = document.getElementById('terms');
  let formBtn = document.querySelector('.form__btn');
  formBtn.setAttribute('disabled','true');

  return {
    tooglePassword: function () {
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
      } else {
        inputPassword.type = 'password';
      }
    },
    validate: function () {
      const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      const nameRegExp = /^[a-zA-Z]{3,}$/;

      const passResult = passRegExp.test(inputPassword.value);
      const nameResult = nameRegExp.test(inputName.value);

      if (!nameResult) {
        inputName.classList.add('form__error');
        errName.style.display = 'block';
        errName.innerHTML = `
            <p> *Name is required fields </p>  
            <p> *Min 3 words </p> 
            <p> *Name must contain only letters </p>`;
        return false;
      }

      if (!passResult) {
        inputPassword.classList.add('form__error');
        errPass.style.display = 'block';
        errPass.innerHTML = `
          <p> *Password is required fields </p>  
          <p> *Contain at least 1 uppercase character </p> 
          <p> *Contain at least 8 characters </p> 
          <p> *Contains only 0-9a-zA-Z <p/>`;
        return false;
      }

      if (!inputCountry.value) {
        inputCountry.classList.add('form__error');
        errCountry.style.display = 'block';
        errPass.textContent = '*Chose your country';
        return false;
      }

      document.querySelector('.form__error--password').style.display = 'none';
      return true;
    },

    btnCheck: function() {
      termCheckbox.checked ? formBtn.removeAttribute('disabled') : formBtn.setAttribute('disabled', 'true')
    }
  };
})();
