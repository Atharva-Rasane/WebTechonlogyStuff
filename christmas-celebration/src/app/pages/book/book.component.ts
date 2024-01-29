import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { TestService } from '../../services/test.service';
import { PaidComponent } from "../../components/paid/paid.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book',
    standalone: true,
    templateUrl: './book.component.html',
    styleUrl: './book.component.css',
    imports: [FormComponent, PaidComponent, CommonModule]
})
export class BookComponent {
    flag = 1
    finalp = 0
    constructor(public testservice: TestService){}
    
}
