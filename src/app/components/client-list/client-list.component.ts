import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  imports: [CommonModule , FormsModule],
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  // Client sélectionné pour modification
  clientToEdit: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Récupérer la liste des clients depuis le service
    this.clients = this.dataService.clients;
  }

  // Méthode pour supprimer un client
  supprimerClient(clientId: number): void {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.dataService.supprimerClient(clientId);
      this.clients = this.clients.filter(client => client.id !== clientId);
    }
  }

  // Méthode pour modifier un client
  modifierClient(clientId: number): void {
    // Trouver le client à modifier
    this.clientToEdit = { ...this.clients.find(client => client.id === clientId) };
  }

  // Méthode pour sauvegarder les modifications
  sauvegarderModification(): void {
    // Mettre à jour les informations du client
    const index = this.clients.findIndex(client => client.id === this.clientToEdit.id);
    if (index !== -1) {
      this.clients[index] = this.clientToEdit;  // Mise à jour dans le tableau local
      this.dataService.updateClient(this.clientToEdit);  // Mettre à jour dans le service (si implémenté)
    }
    // Réinitialiser le client à éditer
    this.clientToEdit = null;
  }

  // Méthode pour annuler la modification
  annulerModification(): void {
    this.clientToEdit = null;
  }
}
