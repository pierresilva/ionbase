import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectInputComponent,
        multi: true
    }]
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {

    @Input('list') list: any[] = [];
    @Input('label') label: string = '';
    @Input('value') value: any = null;
    @Input('required') required: boolean = false;
    @Input('minlength') minlength: number = 1;
    @Input('maxlength') maxlength: number = 1000;
    @Input('name') name: boolean = false;
    @Input('itemValueField') itemValueField: string = 'id';
    @Input('itemTextField') itemTextField: string = 'name';
    @Input('isMultiple') isMultiple: boolean = false;

    private onChange: Function = (value: number) => {};
    private onTouch: Function = () => {};
    private disabled: boolean = false;

  constructor(
  ) {  }

  ngOnInit() {}

    // Allow Angular to set the value on the component
    writeValue(value: any): void {
      console.log(value.value);
        this.onChange(value.value);
        this.value = value.value;
    }

    // Save a reference to the change function passed to us by
    // the Angular form control
    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    // Save a reference to the touched function passed to us by
    // the Angular form control
    registerOnTouched(fn: Function): void {
        this.onTouch = fn;
    }

    // Allow the Angular form control to disable this input
    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }


}
