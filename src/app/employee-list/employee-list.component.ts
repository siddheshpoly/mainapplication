import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { constrainedMemory } from 'process';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: employee[] = [];
employee: any;
  constructor()
  {}
  ngOnInit(): void {

    this.employees =[
      {"id":1,"empName":"Siddhesh","empAddress":"Ghatkopar","empMobileno":976808,"empSalary":2000}
    ]
    
  }

}
