import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rendezvous-list',
  templateUrl: './rendezvous-list.component.html',
  styleUrls: ['./rendezvous-list.component.css'],
  standalone: true, // Ajout de standalone pour la compatibilité avec Angular 14+
  imports: [CommonModule, FormsModule],
})
export class RendezvousListComponent implements OnInit {
  rendezvous: any[] = [];
  clients: any[] = [];
  professionnels: any[] = [];
  selectedRendezvous: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.rendezvous = this.dataService.getAllRendezvous();
    this.clients = this.dataService.getAllClients();
    this.professionnels = this.dataService.getAllProfessionnels();
  }

  // Méthode pour obtenir le nom du client par son id
  getClientName(clientId: number): string {
    const client = this.clients.find((c) => c.id === clientId);
    return client ? client.nom : 'Inconnu';
  }

  // Méthode pour obtenir le nom du professionnel par son id
  getProfessionnelName(professionnelId: number): string {
    const professionnel = this.professionnels.find((p) => p.id === professionnelId);
    return professionnel ? professionnel.nom : 'Inconnu';
  }

  // Fonction de suppression d'un rendez-vous
  supprimerRendezvous(id: number): void {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous?')) {
      this.dataService.supprimerRendezvous(id);
    this.rendezvous = this.dataService.getAllRendezvous();
    }
     // Mettre à jour la liste des rendez-vous
  }

  // Fonction pour éditer un rendez-vous
  modifierRendezvous(rendezvous: any): void {
    const client = this.clients.find((c) => c.id === rendezvous.clientId);
    const professionnel = this.professionnels.find((p) => p.id === rendezvous.professionnelId);
    
    this.selectedRendezvous = {
      ...rendezvous, // Conserver toutes les autres propriétés du rendez-vous
      client: client,  // Ajouter l'objet complet du client
      professionnel: professionnel // Ajouter l'objet complet du professionnel
    };
  }

  // Sauvegarde des modifications
  saveModification(): void {
    if (this.selectedRendezvous) {
      this.selectedRendezvous.clientId = this.selectedRendezvous.client.id;
      this.selectedRendezvous.professionnelId = this.selectedRendezvous.professionnel.id;
  
      this.dataService.updateRendezvous(this.selectedRendezvous); // Mettre à jour le rendez-vous
      this.selectedRendezvous = null; // Réinitialiser l'objet de rendez-vous sélectionné
      this.rendezvous = this.dataService.getAllRendezvous(); // Rafraîchir la liste des rendez-vous
    }
  }

  // Annuler les modifications
  cancelModification(): void {
    this.selectedRendezvous = null;
  }
}
