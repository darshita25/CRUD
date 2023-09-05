import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from './class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8082/darshita/employees";
  constructor(private httpClient:HttpClient) { }

  getEmployeesList(){
    return this.httpClient.get<any>("darshita/employees").pipe(map((res:any)=>{
      return res;
    }))
  }
}
