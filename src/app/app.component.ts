import { Component } from '@angular/core';
import { EmployeeService } from './employee-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Directory';
  employees: any[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees()
        .subscribe((data:any) => {
          console.log(data)
          return this.employees = data['results'];
        })
  }
}
