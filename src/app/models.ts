export interface categoryModel{
    id: number;
    name: string;    
}

export interface subCategoryModel{
    id: number;
    name: string;
    categoryId: number;
    price:number;
}

export interface genderModel{
    id: number;
    name: string;    
}

export interface bookOrderModel{
    gender: genderModel;
    category: categoryModel;
    subCategory: subCategoryModel;
    name: string;
    surname: string;
    address: string;
    postalCode: string;
    email: string;
    phone: string;
    quantity: number;
    totalAmount: number;
}

