import {Directive, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export const equalTo = (equalControl: AbstractControl): ValidatorFn => {
    let subscribe: boolean = false;

    return (control: AbstractControl): {[key: string]: boolean} => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }

        let v: string = control.value;

        return equalControl.value === v ? null : {equalTo: true};
    };
};

const EQUAL_TO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidationEqualToDirective),
    multi: true
};

@Directive({
    selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
    providers: [EQUAL_TO_VALIDATOR]
})
export class ValidationEqualToDirective implements Validator, OnInit {

    @Input() equalTo: FormControl;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }

}
