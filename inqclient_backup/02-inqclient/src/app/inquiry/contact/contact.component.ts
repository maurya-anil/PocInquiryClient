import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ContactlookupComponent } from '../../contactlookup/contactlookup.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onContactLookup()
  {
    // alert ("lookup button clicked");
    let dialogRef = this.dialog.open(ContactlookupComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
