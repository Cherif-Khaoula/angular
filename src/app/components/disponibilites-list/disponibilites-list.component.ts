import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-disponibilites',
  templateUrl: './disponibilites-list.component.html',
  styleUrls: ['./disponibilites-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class DisponibilitesListComponent {

  disponibilites: any[] = [];
  professionnels: any[] = [];
  selectedDisponibilite: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.disponibilites = this.dataService.getAllDisponibilites();
    this.professionnels = this.dataService.getAllProfessionnels();
  }
  getProfessionnelName(professionnelId: number): string {
    const professionnel = this.professionnels.find((p) => p.id === professionnelId);
    return professionnel ? professionnel.nom : 'Inconnu';
  }
  ajouterDisponibilite() {
    this.selectedDisponibilite = {
      id: null,
      professionnelId: '',
      date: '',
      heureDebut: '',
      heureFin: ''
    };
  }

  modifierDisponibilite(dispo: any):void {
    
    const professionnel = this.professionnels.find((p) => p.id === dispo.professionnelId);
    this.selectedDisponibilite = { 
      ...dispo,
      professionnel: professionnel };
  }


  saveDisponibilite(): void {
    if (this.selectedDisponibilite) {
      this.selectedDisponibilite.professionnelId = this.selectedDisponibilite.professionnel.id;
  
      this.dataService.updateDisponibilite(this.selectedDisponibilite); // Mettre à jour le rendez-vous
      this.selectedDisponibilite = null; // Réinitialiser l'objet de rendez-vous sélectionné
      this.disponibilites = this.dataService.getAllDisponibilites(); // Rafraîchir la liste des rendez-vous
    }
  }


  supprimerDisponibilite(id: number) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce rendez-vous?')) {
      this.dataService.supprimerDisponibilite(id);
    this.disponibilites = this.dataService.getAllDisponibilites();
    }
    
  }

  cancelDisponibilite() {
    this.selectedDisponibilite = null;
  }
}
