import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes: string[] = [
    "deeppurple-amber",
    "indigo-pink",
    "pink-bluegrey",
    "purple-green",
  ];
  @HostBinding('class') activeThemeCssClass: string = 'purple-green';
  isThemeDark = false;
  activeTheme: string;
  THEME_DARKNESS_SUFFIX = `-dark`;
  constructor(
    private overlayContainer: OverlayContainer,
  ) { }
  //#region 主題相關
  setTheme(theme: string, darkness: boolean | null = null) {
    if (darkness === null)
      darkness = this.isThemeDark;
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return;
    } else
      this.isThemeDark = darkness;

    this.activeTheme = theme;

    const cssClass = darkness === true ? theme + this.THEME_DARKNESS_SUFFIX : theme;
    //console.log("ThemeService cssClass=", cssClass);
    const classList = this.overlayContainer.getContainerElement().classList;
    //console.log(">ThemeService classList=", classList);
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass);
    else
      classList.add(cssClass);
    //console.log("<ThemeService classList=", classList);
    this.activeThemeCssClass = cssClass;
  }
  //#endregion 主題相關
}
