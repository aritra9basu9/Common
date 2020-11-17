import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//  Property Binding 1st way
  product ={
    name: "Lenovo Laptop",
    description: "Best Laptop",
    price:88888
  }
  // Property Binding 2nd way 
  pageTitle:string="This is awesome page";
  imageURL:string='assets/nature.jpg';

   // Two way data binding
  message:string="";

  // Two way data binding with ngModule
  commanText:string="";

  //Fake Json Implementation

  private productSource = "assets/products.json";
  public productList;
 constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.productSource).subscribe(
      data=>{
        console.log(data);
        this.productList=data;
      },
      err=>
      console.log(err)
    );
  }

  //Event Binding  using template variable inpdata

  submitAction(inpdata)
  {
    console.log(inpdata.value);
   console.log('submit action is called');
  }
 
  // Two way data binding
 
 submitAction1(inpdata)
 {
   console.log(inpdata.value);
   this.message= inpdata.value;
  console.log('submit action is called');
 }

  

}
