import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  numOfResults = 12;

  constructor(private http: HttpClient) { }

  getEmployees()  {
    return this.http.get('https://randomuser.me/api/?results=' + this.numOfResults)       
  }
}
