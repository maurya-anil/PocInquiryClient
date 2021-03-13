import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-contactlookup',
  templateUrl: './contactlookup.component.html',
  styleUrls: ['./contactlookup.component.css']
})
export class ContactlookupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactlookupComponent>) { }

  ngOnInit(): void {
  }
  close() {
    console.log ("Close button hit");
    this.dialogRef.close();
  }
}
