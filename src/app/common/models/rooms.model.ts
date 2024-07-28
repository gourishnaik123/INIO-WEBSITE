export interface Hotels {
  currency: string;
  hotelId: number;
  hotelName: string;
  description: string;
  futureRatePlans: any[];
  roomsNew: Rooms[];
}
export interface RatePlan {
  ratePlanId: number;
  ratePlanName: string;
  inclusions: any;
  roomRateKey:any
  name: string;
  price: {
    basePrice: number;
    discountedPrice: number;
    discountAmount: number;
    finalPrice: number;
    taxValue: number;
    totalDealDiscount: number;
  };
  mealPlan: MealPlan;
 
}

export interface MealPlan {
  breakFastIncluded: boolean;
  lunchIncluded: boolean;
  dinnerIncluded: boolean;
  selfCatering: boolean;
  mealPlanName: string;
}
export type CancellationPolicy = string[];
export interface Rooms {
  roomRateKey: number;
  roomId: number;
  ratePlanId: number;
  roomName: string;
  ratePlanName: string;
  maxAdult: number;
  maxChild: number;
  maxOccupancy: number;
  quantity: number;
  roomSize: string;
  refundable: boolean;
  isStealDeal: boolean;
  isAvailable: boolean;
  mlos: number;
  lastInventoryAvailableDate: string;
  mealPlan: MealPlan;
  breakFastIncluded: boolean;
  dinnerIncluded: boolean;
  selfcatering: boolean;
  isPackage: boolean;
  breakFast: boolean;
  amenities: any;
  inclusions: any;
  taxes: any;
  deals: any;
  promoCodes: any;
  applicableAddOns: any;
  price: Price;
  roomImage: any;
  cancellationPolicyDetails: CancellationPolicyDetails[];
  Inclusions:any;
  cancellationPolicy: CancellationPolicy;
  daywisePrice: any;
  ratePlanTnc: any;
  ratePlans: RatePlan[];
  bathRoom:number;
  bedRoom:number;
  livingRoom:number;

}

export interface Price {
  finalPriceWithTax: number;
  finalPrice: number;
  finalTaxValue: number;
  finalTotalDealDiscount: number;
  finalAddOnPrice: number;
  finalAutoApplyDealDiscount: number;
  mop: number;
  finalBasePrice: number;
  discountedBasePrice: number;
  totalAdultPrice: number;
  discountedAdultPrice: number;
  totalChildrenPrice: number;
  discountedChildPrice: number;
}
export interface MealPlan{
  MealPlanName:string
}

export interface CancellationPolicyDetails {
  durationType: string;
  fromValue: number;
  toValue: number;
  chargeType: string;
  value: number;
  statement: string;
  association: string;
  currency: string;
}

export interface OneDayRooms {
  basePrice: string;
  checkInHrsPolicy: string;
  checkOutHrsPolicy: string;
  fromDate: string;
  id: number;
  name: string;
  roomId: number;
  showRoomForDayUse: boolean;
  toDate: string;
  dayRoomCheckinBreakupReq: DayRoomCheckInBreakup[];
}

export interface DayRoomCheckInBreakup {
  dayRoomDetailId: number
  id: number
  isPercentage: boolean
  isActive: boolean
  discountedValue: number
  checkinHrs: number
}
