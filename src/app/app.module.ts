import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LanguageDropdownComponent } from './header/language-dropdown/language-dropdown.component';
import { ContainerComponent } from './UI/container/container.component';
import { UserComponent } from './header/user/user.component';
import { TokensComponent } from './header/tokens/tokens.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './modules/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    UserComponent,
    LanguageDropdownComponent,
    TokensComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
