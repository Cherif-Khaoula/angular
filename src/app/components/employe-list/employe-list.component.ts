import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  imports: [CommonModule , FormsModule],
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  professionnels: any[] = [];
  employeToEdit: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Récupérer la liste des professionnels depuis le service
    this.professionnels = this.dataService.professionnels;
  }

  // Méthode pour supprimer un employé
  supprimerEmploye(employeId: number): void {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      this.dataService.supprimerEmploye(employeId);
      this.professionnels = this.professionnels.filter(prof => prof.id !== employeId);
    }
  }

  // Méthode pour modifier un employé
  modifierEmploye(employeId: number): void {
    // Trouver l'employé à modifier
    this.employeToEdit = { ...this.professionnels.find(prof => prof.id === employeId) };
  }

  // Méthode pour sauvegarder les modifications
  sauvegarderModification(): void {
    const index = this.professionnels.findIndex(prof => prof.id === this.employeToEdit.id);
    if (index !== -1) {
      this.professionnels[index] = this.employeToEdit;
      this.dataService.updateEmploye(this.employeToEdit);  // Mettre à jour dans le service
    }
    this.employeToEdit = null;  // Réinitialiser l'employé à éditer
  }

  // Méthode pour annuler la modification
  annulerModification(): void {
    this.employeToEdit = null;
  }
}
