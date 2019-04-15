import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonPullUpComponent } from "./ion-pullup";
import { IonPullUpTabComponent } from "./ion-pullup-tab";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [IonPullUpComponent, IonPullUpTabComponent],
  exports: [IonPullUpComponent, IonPullUpTabComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IonPullupModule {}
