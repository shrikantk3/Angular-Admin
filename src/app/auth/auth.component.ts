import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    MoveDirection,
    // ClickMode,
    // HoverMode,
    OutMode,
  } from "@tsparticles/engine";
  //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
  import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
  import { NgParticlesService } from "@tsparticles/angular";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})

export class AuthComponent{
   
}