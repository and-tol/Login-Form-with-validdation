// import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';

const {form, inputEmail, inputPassword } = UI

form.addEventListener('submit', (event: Event) : void => {
  event.preventDefault()

  onSubmit()
})

// Handlers
function onSubmit() {

}
