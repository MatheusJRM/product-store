import { ApplicationConfig, ValueProvider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

const SNACK_BAR_CONFIG: ValueProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 3000,
  } as MatSnackBarConfig,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    SNACK_BAR_CONFIG,
  ],
};
