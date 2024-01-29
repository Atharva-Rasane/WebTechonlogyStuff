import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.css',
    imports: [FormComponent]
})
export class RegistrationComponent {

}
