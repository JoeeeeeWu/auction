import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
    new Product(1,"第一个商品",1.99,1.8,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",1.99,3.5,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
    new Product(3,"第三个商品",1.99,5.0,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
    new Product(4,"第四个商品",1.99,4.3,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",1.99,1.6,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",1.99,2.9,"这是第一个商品，正在学习angular中",["电子产品","硬件设备"]),
  ];

  private comments: Array<Comment> = [
    new Comment(1, 1, "2017-2-2 22:22:22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-2-2 22:22:22", "张三", 3, "东西不错"),
    new Comment(3, 1, "2017-2-2 22:22:22", "张三", 3, "东西不错"),
    new Comment(4, 2, "2017-2-2 22:22:22", "张三", 3, "东西不错"),
  ];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product: Product) => product.id == id);
  }

  getCommentsForProductId(id:number): Array<Comment> {
    return this.comments.filter((comment:Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public tiemstamp:string,
    public user:string,
    public rating:number,
    public content:string,
  ){

  }
}
