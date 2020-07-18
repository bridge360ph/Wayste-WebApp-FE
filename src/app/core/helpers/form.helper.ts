import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormHelper {

    constructor() { }

    HasError(control: FormControl | AbstractControl): boolean {
        return control.errors !== null && control.touched;
    }

    isValid(control: FormControl | AbstractControl): boolean {
        return !control.errors && control.touched;
    }

    MarkFormGroupTouched(formGroup: FormGroup) {
        (Object as any).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            control.updateValueAndValidity();
            if (control.controls) {
                Object.keys(control.controls).forEach(c => {
                    control.markAsTouched();
                    control.updateValueAndValidity();
                });
            }
        });
    }

    MarkFormGroupUntouched(formGroup: FormGroup) {
        (Object as any).values(formGroup.controls).forEach(control => {
            control.markAsUntouched();

            if (control.controls) {
                control.controls.forEach(c => this.MarkFormGroupTouched(c));
            }
        });
    }

    addClass(control: FormControl | AbstractControl) {
        if (!control) {
            return '';
        }

        return {
            'is-invalid': this.HasError(control),
            'is-valid': this.isValid(control)
        };
    }
}
