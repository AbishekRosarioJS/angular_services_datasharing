import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit{

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    
  }

  addCustomer(customer_name:string){
    this.customerService.add(customer_name);

  }

}
