import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent {
  bookingForm: FormGroup;
  submitted = false;
  success = false;
  error = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [''],
      phone: ['', Validators.required],
      eventType: ['', Validators.required],
      eventDate: ['', Validators.required],
      guests: ['', Validators.required],
      description: [''],
      specialRequests: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;
    this.success = false;

    if (this.bookingForm.invalid) {
      return;
    }

    this.http.post('/api/bookings', this.bookingForm.value).subscribe({
      next: () => {
        this.success = true;
        this.submitted = false;
        this.bookingForm.reset();
      },
      error: () => {
        this.error = true;
        this.submitted = false;
      }
    });
  }
}