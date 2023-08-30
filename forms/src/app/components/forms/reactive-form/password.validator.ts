import { AbstractControl, ValidationErrors } from "@angular/forms";

export function controlsAreEqual(control: AbstractControl): ValidationErrors | null {
    
    if (control.value.new === control.value.confirm) {
        return null;
    }

    return {
        controlAreNotEquals: true
    }
}