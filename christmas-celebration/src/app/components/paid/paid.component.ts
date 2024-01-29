import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-paid',
  standalone: true,
  imports: [],
  templateUrl: './paid.component.html',
  styleUrl: './paid.component.css'
})
export class PaidComponent {
  constructor(public testservice: TestService){}
}
