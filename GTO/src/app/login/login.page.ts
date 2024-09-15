import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  
  ingresar() {
    console.log('Iniciar sesión presionado');
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const isAuthenticated = this.authenticateUser(this.username, this.password);

    if (isAuthenticated) {

      this.router.navigate(['/home']);
    } else {

      console.log('Credenciales incorrectas');
      alert('Usuario o contraseña incorrectos.');
    }
  }


  authenticateUser(username: string, password: string): boolean {

    if (username === 'usuario@correo.com' && password === '12345') {
      return true;
    }
    return false;
  }
}
