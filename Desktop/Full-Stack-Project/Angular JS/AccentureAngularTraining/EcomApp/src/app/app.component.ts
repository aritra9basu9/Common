import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EcomApp';
  name:string ="John Smith";
  product ={
    name: "Lenovo Laptop",
    description: "Best Laptop",
    price:222222
  }

  public showPrice()
  {
    return this.product.price;
  }
}
