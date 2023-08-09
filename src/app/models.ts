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

