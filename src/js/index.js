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
  formBtn.setAttribute('disabled', 'true');

  return {

    validate: function (e) {
      e.preventDefault();
      console.log(this.validateName(),  this.validatePassword(), this.validateCountry());
      if(this.validateName() && this.validatePassword && this.validateCountry()) {
        console.log('Logged')
      } else {
        console.log('Not autorized')
      }
      return true;
    },
  

 

    validateName: function () {
      const nameRegExp = /^[0-9a-zA-Zа-яА-Я^\s ]{1,}$/;
      const nameResult = nameRegExp.test(inputName.value);

      if (!nameResult) {
        inputName.classList.add('form__error');
        errName.style.display = 'block';
        errName.innerHTML = `<p> *Name is required fields </p>`;
        return false;
      }
      if(inputName.value.trim() === '') {
        inputName.classList.add('form__error');
        errName.style.display = 'block';
        errName.innerHTML = `<p>*Only space not allowed</p>`;
        return false;
      }
      errName.style.display = 'none';
      inputName.classList.remove('form__error');
      return true;
    },

    validatePassword: function () {
      const passRegExp = /^[0-9a-zA-Zа-яА-Я]{4,}$/;
      const passResult = passRegExp.test(inputPassword.value);

      if(inputPassword.value.trim() === '') {
        inputPassword.classList.add('form__error');
        errPass.style.display = 'block';
        errPass.innerHTML = `<p>*Only space not allowed</p>`;
        return false;
      }

      if(inputPassword.value.length <= 3) {
        inputPassword.classList.add('form__error');
        errPass.style.display = 'block';
        errPass.innerHTML = `<p>*Password must be min 4 characters</p>`;
        return false;
      }

      if (!passResult) {
        inputPassword.classList.add('form__error');
        errPass.style.display = 'block';
        errPass.innerHTML = `<p>*Password is required fields</p>`;
        return false;
      } 

      
      errPass.style.display = 'none';
      inputPassword.classList.remove('form__error');
      return true;
    },

    validateCountry: function() {
      if (!inputCountry.value) {
        inputCountry.classList.add('form__error');
        errCountry.style.display = 'block';
        errPass.textContent = '*Chose your country';
        return false;
      }
      errCountry.style.display = 'none';
      inputCountry.classList.remove('form__error');
      return true;
    },

    btnCheck: function () {
      termCheckbox.checked
        ? formBtn.removeAttribute('disabled')
        : formBtn.setAttribute('disabled', 'true');
    },

      tooglePassword: function () {
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
      } else {
        inputPassword.type = 'password';
      }
    },
  };
})();
