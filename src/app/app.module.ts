import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './Shared/Shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    NgbModule,
    ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
