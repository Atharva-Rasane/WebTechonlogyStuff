import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  total = 0
  paid = 0
  customername= ""
  customeremail = ""
  discount = 0
  constructor() { }
}
