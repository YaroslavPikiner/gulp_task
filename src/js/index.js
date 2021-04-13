const ValidateForm = (function() {
  const inputPassword = document.getElementById('password-input');
  const inputCountry = document.getElementById('country-select');
  const inputName = document.getElementById('full-name');
  
  return {
    tooglePassword: function() {
        if(inputPassword.type === 'password') {
          inputPassword.type = 'text' ;
        }else {
          inputPassword.type = 'password'
        }
        
    },
    validate: function() {
    }
  };

})();
