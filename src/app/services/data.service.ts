import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Données des clients
  clients = [
    { id: 1, nom: 'Alice Dupont', email: 'alice@example.com', numeroTelephone: '0123456789' },
    { id: 2, nom: 'Bob Martin', email: 'bob@example.com', numeroTelephone: '0987654321' }
  ];

  // Données des professionnels
  professionnels = [
    { id: 1, nom: 'Dr. Sarah Bernard', specialite: 'Médecin', numeroTelephone: '0112233445' },
    { id: 2, nom: 'Me. Paul Girard', specialite: 'Avocat', numeroTelephone: '0667788990' }
  ];

  // Données des rendez-vous
  rendezvous = [
    { id: 1, clientId: 1, professionnelId: 1, date: '2024-12-05', heure: '10:00', statut: 'Confirmé' },
    { id: 2, clientId: 2, professionnelId: 2, date: '2024-12-06', heure: '14:00', statut: 'En attente' }
  ];
  // Données des disponibilités
disponibilites = [
  { id: 1, professionnelId: 1, date: '2024-12-05', heureDebut: '09:00', heureFin: '12:00' },
  { id: 2, professionnelId: 2, date: '2024-12-06', heureDebut: '14:00', heureFin: '17:00' }
];
 // Méthode pour récupérer toutes les disponibilités
getAllDisponibilites() {
  return this.disponibilites;
}

// Méthode pour ajouter une disponibilité
ajouterDisponibilite(newDisponibilite: any): void {
  newDisponibilite.id = this.disponibilites.length + 1; // Générer un nouvel ID
  this.disponibilites.push(newDisponibilite); // Ajouter à la liste
}

// Méthode pour mettre à jour une disponibilité
updateDisponibilite(updatedDisponibilite: any): void {
  const index = this.disponibilites.findIndex(dispo => dispo.id === updatedDisponibilite.id);
  if (index !== -1) {
    this.disponibilites[index] = updatedDisponibilite; // Mettre à jour
  }
}


// Méthode pour supprimer une disponibilité
supprimerDisponibilite(disponibiliteId: number): void {
  this.disponibilites = this.disponibilites.filter(dispo => dispo.id !== disponibiliteId); // Supprimer
}


  // Méthode pour récupérer tous les rendez-vous
  getAllRendezvous() {
    return this.rendezvous;
  }

  // Méthode pour récupérer tous les clients
  getAllClients() {
    return this.clients;
  }

  // Méthode pour récupérer tous les professionnels
  getAllProfessionnels() {
    return this.professionnels;
  }

  // Méthode pour mettre à jour un rendez-vous
  updateRendezvous(updatedRendezvous: any): void {
    const index = this.rendezvous.findIndex(r => r.id === updatedRendezvous.id);
    if (index !== -1) {
      this.rendezvous[index] = updatedRendezvous; // Mettre à jour le rendez-vous dans la liste
    }
  }

  // Méthode pour supprimer un rendez-vous
  supprimerRendezvous(id: number): void {
    this.rendezvous = this.rendezvous.filter(rdv => rdv.id !== id); // Filtrer pour supprimer le rendez-vous
  }

  // Méthode pour mettre à jour un client
  updateClient(updatedClient: any): void {
    const index = this.clients.findIndex(client => client.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = updatedClient; // Mettre à jour le client
    }
  }

  // Méthode pour supprimer un client
  supprimerClient(clientId: number): void {
    this.clients = this.clients.filter(client => client.id !== clientId); // Filtrer pour supprimer le client
  }

  // Méthode pour mettre à jour un professionnel
  updateEmploye(updatedEmploye: any): void {
    const index = this.professionnels.findIndex(prof => prof.id === updatedEmploye.id);
    if (index !== -1) {
      this.professionnels[index] = updatedEmploye; // Mettre à jour le professionnel
    }
  }

  // Méthode pour supprimer un professionnel
  supprimerEmploye(employeId: number): void {
    this.professionnels = this.professionnels.filter(prof => prof.id !== employeId); // Filtrer pour supprimer le professionnel
  }
}
