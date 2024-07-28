export interface Destination {
    destinationName: string
    destinationState: string
    destinationCountry: string
    destinationImageUrl: string
    chainName: string
    propertyList: Property[]
    rooms:rooms[]
}

export interface Property {
    hotelName: string
    hotelImageUrl: string
    productId: number
    description: string
    address: string
    propertyThemes: string
    propertyDetail:any
    rooms:rooms[]
    currency:string;
    mop:number
}

export interface rooms{
    bedRoom:number
    bathRoom:number
    daywisePrice:DaywisePrice[];
    price:Price;
    mop:number
}
export interface DaywisePrice{
    actual:number
}
export class Price{
    actual:any;
}