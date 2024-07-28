export interface Service {
  serviceName: string;
  shortDescription: string;
  imageUrl: string;
  index: number;
}

export interface ProductServices {
  id : number,
  productId : number,
  name: string,
  description: string,
  charges: number,
  imageUrl:string
  quantity: number
  currency: string
}