/** Providers NG_VALUE_ACCESSOR - a intenção é registrar nosso componenete como um value_accessor que fica
 *  disponível para ser usado com as diretivas NgModel e as outras directivas do reactive form.
 *  No componente order.component.html é necessário ter o atributo name='paymentOption' para trabalhar com
 *  NgModel
*/
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]
  value: any
  onChange: any

  constructor() { }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }


  ngOnInit() {
  }


}
