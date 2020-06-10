type UI = {
  form: HTMLFormElement;
  inputEmail: HTMLElement | null;
  inputPassword: HTMLElement | null;
}

const UI: UI = {
  form: document.forms['loginForm'],
  inputEmail: document.getElementById('mail'),
  inputPassword: document.getElementById('password'),
};

export default UI;
