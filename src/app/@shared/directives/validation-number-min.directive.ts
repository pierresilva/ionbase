import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, Validators} from '@angular/forms';
import {isDate, isPresent} from './lang';

export const min = (min: number): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: any} => {
        if (!isPresent(min)) return null;
        if (isPresent(Validators.required(control))) return null;

        let v: number = +control.value;
        return v >= +min ? null : {actualValue: v, requiredValue: +min, min: true};
    };
};

const MIN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidationNumberMinDirective),
    multi: true
};

@Directive({
    selector: '[minNumber][formControlName],[minNumber][formControl],[minNumber][ngModel]',
    providers: [MIN_VALIDATOR]
})
export class ValidationNumberMinDirective {

  constructor() { }

}
