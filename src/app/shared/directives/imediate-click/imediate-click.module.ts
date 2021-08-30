import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImmediateClickDirective } from './imediate-click.directive';

@NgModule(
  {
    declarations: [ImmediateClickDirective],
    exports: [ImmediateClickDirective],
    imports: [CommonModule]
  }
)

export class ImmediateClickModule{

}
