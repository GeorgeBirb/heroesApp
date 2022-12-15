// Component για δημιουργία components και OnInit για δημιουργία λογικής κατά την φόρτωση της σελίδας
import {Component, OnInit} from '@angular/core';

// https://www.youtube.com/watch?v=dP9RzPBcnqA
@Component({
  // Δήλωση ονόματος που θα βλέπει το custom element
  selector: 'app-root',
  //Η τιμή που θα πάρει ο selector
  templateUrl: './app.component.html',
  //Απο που θα δέχεται css το app.component.html
  styleUrls: ['./app.component.css']
})

//Η λογική που θα χρησιμοποιήσω στο component app.component.html --> μοιάζει με τα managedBeans του JSF
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() {
  }

  ngOnInit() {
  }

}

