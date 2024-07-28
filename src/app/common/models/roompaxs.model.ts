export class PaxRooms {
  roomId: number;
  roomName: string;
  paxs: Paxs;

  constructor() {
    this.roomId = 0;
    this.roomName = "";
    this.paxs = {
      adults: 0,
      childrens: [],
    };
  }
}

export class Paxs {
  adults: number;
  childrens: Children[];

  constructor() {
    this.adults = 0;
    this.childrens = [];
  }
}

export class Children {
  age: number;

  constructor() {
    this.age = 0;
  }
}
