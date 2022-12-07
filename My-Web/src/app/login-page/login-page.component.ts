import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToHomePage()
  {
    this.router.navigate(['homePage'])
  }

}
