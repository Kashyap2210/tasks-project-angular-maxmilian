import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { SharedModule } from './shared/shared.module';
import { AddTaskComponent } from './tasks/add-task/add-task';
import { TaskComponent } from './tasks/task/task';
import { TasksComponent } from './tasks/tasks';
import { UserComponent } from './user/user';

@NgModule({
  //   declarations: [AppComponent], // array where we will declare & register all the other components
  // now by default "AppComponent" is a standalone component which cannot be imported in a module
  // this is because they are both a rivaling concept, for same Framework
  // hence we need to set standAlone to false in AppComponent
  // then we also remove the imports as we no longer need to import it

  // declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent],
  // since all out components are standalone components, we cannot import them in the declarations
  // declarations are for the module-components
  // imports are for standalone components
  // You can combine both of them and use as Angular keeps in mind the backward compatibility

  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
  ],
  bootstrap: [AppComponent],
  /**
   * imports: [HeaderComponent, UserComponent, TasksComponent],
   *
   * Now only doing the above thing will not resolve the issue.
   * As we will still get the below error
   * "A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the `BrowserModule` is imported"
   * This is because if we are bootstrapping a module then
   * We will have to add BrowserModule as well to the imports array
   * We need to do this because we are using older way of bootstrapping the app
   * bootstrapModule, platformBrowserDynamic in main.ts
   *
   *  */
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
