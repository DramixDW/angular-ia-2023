import { AbstractControl, ValidationErrors } from "@angular/forms";

// Si notre function ne renvoie pas null, c'est que mon input n'est pas valide
export function cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value.includes(' ')) {
        return {
            cannotContainSpace: true
        }
    }

    // Il n'y pas d'erreur de validation
    return null;
}


export function cannotUseAdminUsername(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const adminUsernames = ['Dramix'];
            if (adminUsernames.includes(control.value)) {
                resolve({
                  cannotUseAdminUsername: true,  
                })
            }
            resolve(null);
        }, 5000);
    })
}