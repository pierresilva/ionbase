import { NG_VALIDATORS, Validator, AbstractControl, FormControl, NgModel, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { isDate, isPresent, parseDate } from './lang';

export const minDate = (minInput: any): ValidatorFn => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
    return (control: AbstractControl): ValidationErrors => {

        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }

        if (isForm) {
            minValue = minInput.value;
        }

        value = parseDate(minValue);

        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            } else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            } else {
                throw Error('minDate value must be or return a formatted date');
            }
        }

        if (isPresent(Validators.required(control))) {
            return null;
        }

        const d = new Date(parseDate(control.value)).getTime();

        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }

        return d >= new Date(value).getTime()
            ? null
            : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const MIN_DATE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidationDateMinDirective),
    multi: true
};

@Directive({
    selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
    providers: [MIN_DATE_VALIDATOR]
})
export class ValidationDateMinDirective implements Validator, OnInit, OnChanges {

    @Input() minDate;

    private validator: ValidatorFn;
    private onChange: () => void;

    ngOnInit() {
        this.validator = minDate(this.minDate);
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
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
