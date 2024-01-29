import { Component } from '@angular/core';
import { NewserviceService } from '../../services/newservice/newservice.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  title="TITLE 0NE";
  constructor(public testservice: NewserviceService){}
}
