import { Component, VERSION } from '@angular/core';
import { categories, gender, subCategories } from './mock-data';
import { categoryModel, subCategoryModel } from '../models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';




@Component({
selector: 'app-book-order',
templateUrl: './book-order.component.html',
styleUrls: ['./book-order.component.css']
})

export class BookOrderComponent {

  gender=gender;
  subCategory = subCategories;
  category = categories;
  selectedSubCategories: subCategoryModel[] = [];
  price: number=0;
  totalAmount: number=0;  
  orderForm: FormGroup;
  formData: any = {};
  isQuantityActive: boolean = false;
  orderFormSubmitted: boolean = false;

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      gender: new FormControl (null, Validators.required),
      surname: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
      name: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
      address: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
      postalCode: new FormControl ('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      phone: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),
      email: new FormControl ('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(70)]),
      category: new FormControl (null, Validators.required),
      subCategory: new FormControl (null, Validators.required),
      quantity: new FormControl (0, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]+$/)]),
    });
    console.log(this.orderForm);
  }

  name = 'Angular ' + VERSION.major; //?
  value = 0;

  onQuantityChange() {
    if (this.orderForm.get('quantity')?.value < 1) {
      this.orderForm.get('quantity')?.patchValue(1);
    }
  }

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  getTotalAmount(): number {
  return this.orderForm.controls['quantity'].value * this.price;
  }

  ngOnInit() {
    this.isQuantityActive = false; // Set initial value for isQuantityActive
    this.orderForm.get('subCategory')?.valueChanges.subscribe((value) => {
      this.isQuantityActive = !!value; // Enable quantity field and buttons when a subcategory is selected
      if (!value) {
        this.orderForm.get('quantity')?.patchValue(0);
      } else {
        this.orderForm.get('quantity')?.patchValue(1);
      }
    });
  }

  onSubCategorySelect() {
    if (this.orderForm.controls['subCategory']) {
      this.price = this.orderForm.controls['subCategory'].value.price;
    } else {
      this.price = 0;
    }  
    this.totalAmount = this.getTotalAmount();
  }
    
  onCategorySelect() {
    this.isQuantityActive=false;
    console.log(this.orderForm);
    this.orderForm.controls['subCategory'].setValue(null);
    console.log(this.orderForm.controls['subCategory']);
    this.getSubCategories();
  }

  getSubCategories() {
    if (this.orderForm.controls['category'] != null) {
      this.selectedSubCategories = this.subCategory.filter(
        (method) => method.categoryId == this.orderForm.controls['category']?.value.id
      );
    }
  }

  increaseQuantity() {
    this.orderForm.controls["quantity"].setValue(this.orderForm.controls['quantity'].value+1);
    
  }

  decreaseQuantity() {
    if (this.orderForm.controls['quantity'].value > 1) {
      this.orderForm.controls["quantity"].setValue(this.orderForm.controls['quantity'].value-1);
    }
  }

  getSelectedGenderName(): string {
    const selectedGenderId = this.orderForm.controls['gender'].value;
    const selectedGender = this.gender.find(gender => gender.id === selectedGenderId);
    return selectedGender ? selectedGender.name : '';
  }
   
  onSubmit() {
    const submitButton = document.getElementById('submit');
    if (this.orderForm.valid && submitButton && document.activeElement === submitButton){
      this.orderFormSubmitted = true;
      console.log('Form submitted successfully!');
      console.log(this.orderForm.value); // print form values
    }
  }

}
