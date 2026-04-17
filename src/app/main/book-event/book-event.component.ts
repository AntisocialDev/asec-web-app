import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent {
  bookingForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private firestore: Firestore, private toastService: ToastService) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phone: ['', Validators.required],
      eventType: ['', Validators.required],
      eventDate: ['', Validators.required],
      expectedGuests: ['', Validators.required],
      status: ['pending'],
      description: [''],
      specialRequests: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookingForm.invalid) {
      this.submitted = false;
      return;
    }

    const bookingData = {
      ...this.bookingForm.value,
      createdAt: serverTimestamp()
    };

    addDoc(collection(this.firestore, 'bookings'), bookingData)
      .then(() => {
        this.toastService.show('Booking request submitted! We\'ll contact you within 24 hours.', 'success');
        this.submitted = false;
        this.bookingForm.reset({ status: 'pending' });
      })
      .catch(() => {
        this.toastService.show('Something went wrong. Please try again.', 'error');
        this.submitted = false;
      });
  }
}