import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit{

  constructor(private customerService:CustomerService){}

  customers:Customer[]=[];
  
  ngOnInit(){
    this.customers = this.customerService.get();

  }
}
