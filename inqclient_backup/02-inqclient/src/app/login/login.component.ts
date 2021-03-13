import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../rest/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform;

  loginForm = new FormGroup({
    userid: new FormControl(''),
    password: new FormControl(''),
  });
  isavailable = true;
  constructor(private loginservice:LoginService, private router: Router) { }
  userid:string = "Test";
  pwd:string = "";
  ngOnInit(): void {
    this.userid = "Test";
    this.pwd = "";

    this.loginForm.controls.userid.setValue ("anil");
    this.loginForm.controls.password.setValue ("Test2");
  }
  
  onSubmit():void
  {
      console.log ("test");
      // alert ("Save clicked");
      this.loginservice.getUserData().subscribe(
        (resp:any) => 
            {
              // alert ("hello");
              console.log(resp);
              // var data = JSON.parse (resp);
              console.log ("username="+resp.username);
              // this.loginForm.controls.userid.setValue (resp.username);
    this.loginForm.controls.password.setValue (resp.password);
              var username = this.loginForm.controls.userid.value;
              if (username == "anil")
                      this.router.navigate(['/inquiry']);
              }
              )
  }
  onSave():void
  {
      console.log ("test");
      // alert ("Save clicked");
      this.loginservice.getUserData().subscribe(
        (resp:any) => 
            {
              console.log(resp);
              // var data = JSON.parse (resp);
              this.userid = resp.username;
              this.pwd = resp.password;
            }
              )
  }

}
  