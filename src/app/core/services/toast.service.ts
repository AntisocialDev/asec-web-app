import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    if (isPlatformBrowser(this.platformId)) {
      (window as any).showToast?.(message, type);
    }
  }
}