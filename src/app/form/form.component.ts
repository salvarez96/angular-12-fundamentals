import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  isFormSubmitted: boolean = false;

  onSubmit(form: HTMLFormElement) {
    const isFormValid = form.checkValidity();

    if (isFormValid) {
      this.isFormSubmitted = true;

      console.log('Form submitted!');
      console.log({ name: this.name, email: this.email, password: this.password });

      setTimeout(() => {
        this.isFormSubmitted = false;
        this.name = '';
        this.email = '';
        this.password = '';
      }, 5000);
    }
  }
}
