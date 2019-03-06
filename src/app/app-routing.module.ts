import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AuthGuard } from "./user/auth.guard";

const ROUTES = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "products",
    canLoad: [AuthGuard],
    loadChildren: "./products/product.module#ProductModule"
  },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
