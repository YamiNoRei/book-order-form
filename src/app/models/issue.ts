import { categoryModel,subCategoryModel } from "../models";

export interface pastOrdersModel {
  orderId: number;
  surname: string;
  name: string;
  category: categoryModel;
  subCategory: subCategoryModel;
  quantity: number;
  totalAmount: number;
}