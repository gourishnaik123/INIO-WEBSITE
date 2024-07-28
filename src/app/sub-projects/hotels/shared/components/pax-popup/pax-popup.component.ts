import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaxRooms, Children } from "src/app/common/models/roompaxs.model";
@Component({
  selector: 'app-pax-popup',
  templateUrl: './pax-popup.component.html',
  styleUrls: ['./pax-popup.component.css']
})
export class PaxPopupComponent implements OnInit {
  totalAdults: number = 0;
  totalChildrens: number = 0;
  childAgeOptions: number[] = Array.from({ length: 15 }, (_, i) => i + 1);

  roomsAndPaxs: PaxRooms[] = [
    {
      roomId: 0,
      roomName: "",
      paxs: {
        adults: 2,
        childrens: [],
      },
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<PaxPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaxRooms[],
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Ensure there is at least one room by default
    this.roomsAndPaxs = this.data;

    console.log(this.roomsAndPaxs)
    if (this.data && this.data.length > 0) {
      this.roomsAndPaxs = this.data.map((room) => ({
        ...room,
        paxs: {
          ...room.paxs,
          childrens: room.paxs.childrens.map((child) => ({
            ...child,
            age: child.age || 0,
            // age: 0,
          })),
        },
      }));
    } else {
     
      this.roomsAndPaxs = [
        {
          roomId: 0,
          roomName: "",
          paxs: {
            adults: 2,
            childrens: [],
          },
        },
      ];
    }
    this.cdr.detectChanges();
    this.calculateTotalPaxs();
  }

  calculateTotalPaxs() {
    this.totalAdults = this.roomsAndPaxs?.reduce(
      (currentTotal, room) => currentTotal + room.paxs.adults,
      0
    );
    this.totalChildrens = this.roomsAndPaxs?.reduce(
      (currentTotal, room) => currentTotal + room.paxs.childrens.length,
      0
    );
  }

  onAddMoreRooms() {
    this.roomsAndPaxs.push({
      roomId: this.roomsAndPaxs.length,
      roomName: "",
      paxs: {
        adults: 2,
        childrens: [],
      },
    });
    this.calculateTotalPaxs();
  }

  onRemoveRooms() {
    // Ensure at least one room remains
    if (this.roomsAndPaxs.length > 1) {
      this.roomsAndPaxs.pop();
      this.calculateTotalPaxs();
    }
  }

  onIncreasePaxCount(i: number, type: string) {
    if (type === "adults") {
      this.roomsAndPaxs[i].paxs.adults++;
    } else if (type === "childrens") {
      this.roomsAndPaxs[i].paxs.childrens.push({ age: 0 } as Children);
    }
    this.calculateTotalPaxs();
  }

  onDecreasePaxCount(i: number, type: string) {
    if (type === "adults") {
      if (this.roomsAndPaxs[i].paxs.adults > 0) {
        this.roomsAndPaxs[i].paxs.adults--;
      }
    } else if (type === "childrens") {
      if (this.roomsAndPaxs[i].paxs.childrens.length > 0) {
        this.roomsAndPaxs[i].paxs.childrens.pop();
      }
    }
    this.calculateTotalPaxs();
  }

  onChildAgeChange(roomIndex: number, childIndex: number, age: number) {
    this.roomsAndPaxs[roomIndex].paxs.childrens[childIndex].age = age;
  }

  onClickDoneBtn() {
    this.dialogRef.close(this.roomsAndPaxs);
    // Optionally save to localStorage or perform other actions here
  }
  
  onIncreaseChildAge(roomIndex: number, childIndex: number) {
    if (this.roomsAndPaxs[roomIndex].paxs.childrens[childIndex].age < 14) {
      this.roomsAndPaxs[roomIndex].paxs.childrens[childIndex].age++;
    }
  }

  onDecreaseChildAge(roomIndex: number, childIndex: number) {
    if (this.roomsAndPaxs[roomIndex].paxs.childrens[childIndex].age > 0) {
      this.roomsAndPaxs[roomIndex].paxs.childrens[childIndex].age--;
    }
  }

 
}