import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  validateForm!: FormGroup;
  userName: string = 'Enter Your Name';
  role: string = 'Frontend Developer'
  index = 0;
  radioValue = 'Female';
  selectedValue = null;
  isCancelled = false;
  isOkayed = false;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // form controls
    this.validateForm = this.fb.group({
      name: [null , [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      role: [null, [Validators.required]],
      gender: [null , [Validators.required]],
      agree: [false]
    });
  }
  // steps
  onIndexChange(event: number): void {
    this.index = event;
  }

  // to sumbmit the form and check validaty
  onSubmitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.userName = this.validateForm.get('name')?.value;
      this.role = this.validateForm.get('role')?.value; 
      this.isOkayed = true;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  //reset the form
  onReset() {
    this.validateForm.reset();
    this.isCancelled = true;
  }
  // close alert
  onClose() {
    this.isCancelled = false;
    this.isOkayed = false;
  }
}
