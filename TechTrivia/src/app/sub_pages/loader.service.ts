import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean = false;

  constructor() { }

  showLoader(): void {
    this.isLoading = true;
  }

  hideLoader(): void {
    this.isLoading = false;
  }
}
