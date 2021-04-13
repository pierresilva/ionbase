import {AbstractControl, Validators, ValidatorFn, NG_VALIDATORS, Validator} from '@angular/forms';
import { Directive, Input, forwardRef, OnInit, SimpleChanges, OnChanges } from '@angular/core';

import { isPresent } from './lang';

export const equal = (val: any): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: any} => {
        if (isPresent(Validators.required(control))) return null;

        let v: any = control.value;

        return val === v ? null : {equal: true};
    };
};

const EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidationEqualDirective),
    multi: true
};

@Directive({
    selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
    providers: [EQUAL_VALIDATOR]
})
export class ValidationEqualDirective implements Validator, OnInit, OnChanges {

    @Input() equal: any;

    private validator: ValidatorFn;
    private onChange: () => void;

    ngOnInit() {
        this.validator = equal(this.equal);
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) this.onChange();
            }
        }
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }

    registerOnValidatorChange(fn: () => void): void {
        this.onChange = fn;
    }

}
