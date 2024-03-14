import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

export function authGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);

    if (!authService.isUserAuthenticated()) {
      const router: Router = inject(Router);

      router.navigateByUrl('/login');
    }
    return true;
  };
}
