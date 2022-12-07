import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './_service/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webnovelai';
  @HostBinding('class') activeThemeCssClass: string = null!;
  constructor(
    private themeService: ThemeService,
  ) {

  }
  ngOnInit(): void {
    //設定主題 和深色背景
    this.themeService.setTheme('deeppurple-amber', true);
    this.activeThemeCssClass = this.themeService.activeThemeCssClass;
  }
}
