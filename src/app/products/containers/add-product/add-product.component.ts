import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'np-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  imageUrls = [
    {
      name: 'f-crossed-design-dress',
      link: 'assets/shop/f-crossed-design-dress.jpg'
    }, {
      name: 'f-fitted-textured-dress',
      link: 'assets/shop/f-fitted-textured-dress.jpg'
    }, {
      name: 'f-neoprene-effect-dress',
      link: 'assets/shop/f-neoprene-effect-dress.jpg'
    }, {
      name: 'f-printed-ruffle-dress',
      link: 'assets/shop/f-printed-ruffle-dress.jpg'
    }, {
      name: 'm-message-cotton-t-shirt',
      link: 'assets/shop/m-message-cotton-t-shirt.jpg'
    }, {
      name: 'm-regular-fit-chest-pocket-shirt',
      link: 'assets/shop/m-regular-fit-chest-pocket-shirt.jpg'
    }, {
      name: 'm-regular-fit-printed-cotton-shirt',
      link: 'assets/shop/m-regular-fit-printed-cotton-shirt.jpg'
    }, {
      name: 'm-striped-cotton-t-shirt',
      link: 'assets/shop/m-striped-cotton-t-shirt.jpg'
    },
  ];
  categories = [
    'male', 'shirt', 'female', 'dress'
  ];
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      categories: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.productService.addNewProduct(this.addForm.value)
        .subscribe(res => this.router.navigateByUrl('/products'));
    }
  }

}
