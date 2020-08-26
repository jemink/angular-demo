import {Component} from '@angular/core';
import {VERSION} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = VERSION;

  areControlsEnabled: boolean;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reloadForm();
  }

  reloadForm() {
    this.areControlsEnabled = !this.areControlsEnabled;
    this.formGroup = this.formBuilder.group({
      autocomplete: [{value: 'ABC', disabled: !this.areControlsEnabled}],
      checkbox: [{value: '', disabled: !this.areControlsEnabled}],
      datepicker: [{value: '', disabled: !this.areControlsEnabled}],
      input: [{value: '', disabled: !this.areControlsEnabled}],
      radio: [{value: '1', disabled: !this.areControlsEnabled}],
      select: [{value: '1', disabled: !this.areControlsEnabled}],
      slider: [{value: '', disabled: !this.areControlsEnabled}],
      slideToggle: [{value: '', disabled: !this.areControlsEnabled}]
    });
    this.formGroup.controls.datepicker.setValue(new Date());
  }

  data() {
    console.log(this.formGroup.value);
  }
}
