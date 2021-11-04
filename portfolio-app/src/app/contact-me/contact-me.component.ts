import { Component, OnDestroy, OnInit, SecurityContext } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactmeService } from '../contactme.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit, OnDestroy {

  contact_form: FormGroup;
  submitted: boolean = false;
  msg_len: number = 0;
  // "^[0-9]*$"),5
  constructor(private form_builder: FormBuilder, private _contactme_service: ContactmeService) {
    this.contact_form = this.form_builder.group({
      name: ['', {validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur'}],
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      phone: ['', {validators: [Validators.pattern('[- +()0-9]+'), Validators.minLength(6), Validators.maxLength(15)], updateOn: 'blur'}],
      message: ['', {validators: [Validators.required, Validators.minLength(5), Validators.maxLength(500)]}]
    });
    
  }
  
  ngOnInit(): void {
    // console.log(this.f.message);
  }

  ngOnDestroy(): void { }

  GetMsgLength(event: any): void { this.msg_len = event.target.value.length; }
  
  //only numbers will be added
  KeyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }  
  
  // convenience getter for easy access to form fields
  // get f(): any { return this.contact_form.controls; }
  get f(): { [key: string]: AbstractControl } { return this.contact_form.controls; }

  OnSubmit(): void {
    if (this.contact_form.valid)
    {
      this.submitted = true;
      // console.log(JSON.stringify(this.contact_form.value, null, 2));
      this._contactme_service.SendMail(this.contact_form.value).subscribe(
        response => console.log("Success! ", response),
        error => console.error("Error: ", error)
      );

    }
  }
  
  // OnReset(): void {
  //   this.submitted = false;
  //   this.contact_form.reset();
  // }
  
}
