import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BmtLogoComponent } from './bmt-logo/bmt-logo.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { Sharedservices } from './shared.services';
import { HttpClientModule } from "@angular/common/http"
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BmtLogoComponent,
    ChatPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BmtLogoComponent,
    ChatPageComponent
  ],
  providers:[Sharedservices]
})
export class SharedModule { }
