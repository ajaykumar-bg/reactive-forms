import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });

    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2), 
        Validators.min(18), 
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }

}
