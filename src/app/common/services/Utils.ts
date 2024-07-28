import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { eSnackBar } from "../enum/enum";

@Injectable({
    providedIn: 'root'
})
export class Utils {

    constructor(private snackBar: MatSnackBar) { }

    snackbar(msg: any, type: string = '') {
        this.snackBar.open(msg, "", {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: this.getSnackbarPanelClass(type)
        });
    }
    delaysnack(msg: any, type: string = '') {
        this.snackBar.open(msg, "", {
            duration: 6000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['custom-snackbar', this.getSnackbarPanelClass(type)],
            data: { customHeight: '200px' }
        });
    }
    private getSnackbarPanelClass(type: string) {
        let color = 'black-snackbar'
        switch (type) {
            case eSnackBar.success: {
                color = 'black-snackbar'
                break
            }
            case eSnackBar.warning: {
                color = 'black-snackbar'
                break
            }
            case eSnackBar.error: {
                color = 'red-snackbar'
                break
            }
            default: {
                color = 'black-snackbar'
            }
        }
        return color
    }
}
