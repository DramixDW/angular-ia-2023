import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isEmailFree(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value !== 'romain@triptyk.eu') {
                resolve(null);
            }

            resolve({
               emailIsAlreadyTaken: true,
            })
        }, 5000)
    })
}