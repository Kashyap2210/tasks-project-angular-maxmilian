import { NgModule } from '@angular/core';
import { AppComponent } from './app';

@NgModule({
  //   declarations: [AppComponent], // array where we will declare & register all the other components
  // now by default "AppComponent" is a standalone component which cannot be imported in a module
  // this is because they are both a rivaling concept, for same Framework
  // hence we need to set standAlone to false in AppComponent
  // then we also remove the imports as we no longer need to import it

  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
