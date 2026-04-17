import { Component } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div *ngIf="visible" 
         [class]="'toast ' + type">
      {{ message }}
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      padding: 16px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: slideIn 0.3s ease;
    }
    .success { background: #22c55e; }
    .error { background: #ef4444; }
    .info { background: #3b82f6; }
    @keyframes slideIn {
      from { transform: translateX(120%); }
      to { transform: translateX(0); }
    }
  `]
})
export class ToastComponent {
  message = '';
  type = 'info';
  visible = false;

  constructor(private toastService: ToastService) {
    (window as any).showToast = (msg: string, t: string) => {
      this.message = msg;
      this.type = t;
      this.visible = true;
      setTimeout(() => this.visible = false, 3000);
    };
  }
}