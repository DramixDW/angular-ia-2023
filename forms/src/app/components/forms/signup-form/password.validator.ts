import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordCannotContainUsername(control: AbstractControl): ValidationErrors | null {
    if (!control.value.password.includes(control.value.username)) {
        return null;
    }

    return {
        usernameIsPresent: {
            username: control.value.username,
        }
    }
}