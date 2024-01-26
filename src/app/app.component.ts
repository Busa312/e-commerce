import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'e-commerce-website';
  isLoggedIn: Observable<boolean> = new Observable<boolean>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn.asObservable();
  }

}
