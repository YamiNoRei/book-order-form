import { categoryModel, genderModel, subCategoryModel } from "../models";

export const subCategories:subCategoryModel[]=[
    {id:1, name:'Κόκκινη Μαδρίτη', categoryId: 1, price:15},
    {id:2, name:'Όνειρο στο Κύμα', categoryId: 1, price:10},
    {id:3, name:'Ανεμοδαρμένα Ύψη', categoryId: 1, price:11},
    {id:4, name:'Manifest', categoryId: 2, price:12},
    {id:5, name:'20 βήματα μπροστά', categoryId: 2, price:20},
    {id:6, name:'Τα μικρά βιβλία της μόδας : Gucci', categoryId: 3, price:7},
    {id:7, name:'Η προίκα', categoryId: 3, price:5},
    {id:8, name:'Ο έξυπνος επενδυτής', categoryId: 4, price:14},
    {id:9, name:'Mafia Manager', categoryId: 4, price:15},
    {id:10, name:'Τα ταξίδια της ζωής μας', categoryId: 5, price:19}
  ];

  export const categories:categoryModel[]=[
    {id:1, name:'Audiobooks'},
    {id:2, name:'Self-Improvement'},
    {id:3, name:'Fashion'},
    {id:4, name:'Economy'},
    {id:5, name:'Travel'}    
  ];

  export const gender:genderModel[]=[
    {id:1, name:'Ms.'},
    {id:2, name:'Mr.'},
    {id:3, name:'N/A'}
  ]