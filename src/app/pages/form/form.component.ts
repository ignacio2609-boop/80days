import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedDataService } from '../../shared-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  myForm = this.formBuilder.group({
    pais:["", [Validators.required]],
    ciudad:["", [Validators.required]],
});

@Output() destino = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  sendForm(){
    this.destino.emit(this.myForm.value);
  }
}
