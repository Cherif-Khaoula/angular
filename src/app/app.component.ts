import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientListComponent } from "./components/client-list/client-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeListComponent } from "./components/employe-list/employe-list.component";
import { RendezvousListComponent } from "./components/rendezvous-list/rendezvous-list.component";
import { DisponibilitesListComponent } from "./components/disponibilites-list/disponibilites-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientListComponent, CommonModule, FormsModule, EmployeListComponent, RendezvousListComponent, RouterModule, DisponibilitesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testangular';
}
