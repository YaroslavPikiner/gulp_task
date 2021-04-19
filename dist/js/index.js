/* eslint-disable */
const ValidateForm = (function () {
  const inputPassword = document.getElementById("password-input");
  const inputCountry = document.getElementById("country-select");
  const inputName = document.getElementById("full-name");

  const errName = document.querySelector(".form__error--name");
  const errPass = document.querySelector(".form__error--password");
  const errCountry = document.querySelector(".form__error--country");

  const termCheckbox = document.getElementById("terms");
  let formBtn = document.querySelector(".form__btn");
  formBtn.setAttribute("disabled", "true");

  return {
    validate: function (e) {
      e.preventDefault();
      console.log(
        this.validateName(),
        this.validatePassword(),
        this.validateCountry()
      );

      if (
        this.validateName() &&
        this.validatePassword &&
        this.validateCountry()
      ) {
        console.log("Logged");
      } else {
        console.log("Not autorized");
      }
      return true;
    },

    validateName: function () {
      const nameSpecialSymbols = /([0-9a-zA-Zа-яёА-ЯЁ,]+( [0-9a-zA-Zа-яёА-ЯЁ,]+)*){1,30}/g;
      const nameSpaceSymbols = /^((?!\s{2}).)*$/;
      const nameSpecialSymbolsRes = nameSpecialSymbols.test(inputName.value);
      const nameSpaceRes = nameSpaceSymbols.test(inputName.value);

      if (inputName.value.length === 0) {
        this.errorMsg(inputName, errName, `<p>Name is required fields</p>`);
        return false;
      }

      if (inputName.value.trim() === "") {
        this.errorMsg(inputName, errName, `<p>Only space not allowed</p>`);
        return false;
      }

      if (!nameSpecialSymbolsRes) {
        this.errorMsg(inputName, errName, `<p>No special character</p>`);
        return false;
      }

      if (!nameSpaceRes) {
        this.errorMsg(inputName, errName, `<p>No more 2 spaces in a row</p>`);
        return false;
      }

      this.clearError(errName, inputName);
      return true;
    },

    validatePassword: function () {
      const passSpecialSymbols = /^[^!@#$%^&*()_]{1,}/;
      const passSpecialSymbolsRes = passSpecialSymbols.test(
        inputPassword.value
      );

      if (inputPassword.value.length <= 3) {
        this.errorMsg(
          inputPassword,
          errPass,
          `<p>Password must be min 4 letters</p>`
        );
        return false;
      }

      if (!passSpecialSymbolsRes) {
        this.errorMsg(
          inputPassword,
          errPass,
          `<p>One special character in a row</p>`
        );
        return false;
      }

      this.clearError(errPass, inputPassword);
      return true;
    },

    validateCountry: function () {
      if (!inputCountry.value) {
        this.errorMsg(inputCountry, errCountry, `<p>Chose your country</p>`);
        return false;
      }

      this.clearError(errCountry, inputCountry);
      return true;
    },

    btnCheck: function () {
      termCheckbox.checked
        ? formBtn.removeAttribute("disabled")
        : formBtn.setAttribute("disabled", "true");
    },

    tooglePassword: function () {
      if (inputPassword.type === "password") {
        inputPassword.type = "text";
      } else {
        inputPassword.type = "password";
      }
    },

    errorMsg: function (input, className, msg) {
      input.classList.add("form__error");
      className.style.visibility = "visible";
      className.innerHTML = msg;
    },

    clearError: function (classType, input) {
      classType.style.visibility = "hidden";
      input.classList.remove("form__error");
    },
  };
})();

// modal window

const btnMain = document.querySelector(".delete__btn--main");
btnMain.addEventListener("click", () => {
  document.getElementById("popup1").classList.toggle("active");
});

const btnYes = document.querySelector(".delete__btn--yes");
btnYes.addEventListener("click", () => {
  document.getElementById("popup1").classList.remove("active");
});

const btnNo = document.querySelector(".delete__btn--no");
btnNo.addEventListener("click", () => {
  document.getElementById("popup1").classList.remove("active");
});

// clock

let hands = [];
hands.push(document.querySelector("#secondhand > *"));
hands.push(document.querySelector("#minutehand > *"));

let cx = 180;
let cy = 180;

function shifter(val) {
  return [val, cx, cy].join(" ");
}

let date = new Date();
const minuteAngle = (360 * date.getMinutes()) / 60;
const secAngle = (360 * date.getSeconds()) / 60;

hands[0].setAttribute("from", shifter(secAngle));
hands[0].setAttribute("to", shifter(secAngle + 360));
hands[1].setAttribute("from", shifter(minuteAngle));
hands[1].setAttribute("to", shifter(minuteAngle + 360));

// circle pointer

// document.getElementById("amouth").addEventListener("change", function () {
//   const text = document.getElementById("count");
//   const inputVal = document.getElementById("amouth").value;
//   let  pct = ((100-inputVal)/100);
//   const bar = document.getElementById('bar');
//   bar.style.strokeDashoffset = pct

//   text.textContent = `${inputVal}%`;
// });

const circle = document.querySelector("circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const count = document.getElementById('count')


circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

const input = document.querySelector("input");
setProgress(input.value);

input.addEventListener("change", function (e) {
  setProgress(input.value);
  count.textContent = `${input.value}%`
});
