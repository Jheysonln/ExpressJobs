import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { IUsuario } from 'src/app/core/interfaces/UserInterface';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { UserService } from 'src/app/data/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy {
  subscription: Subscription = new Subscription;

  imageUrl: string = '../../../../../assets/aizen.jpg';

  prefixOptions: string[] = ['+51', '+52', '+53'];
  selectedPrefix: string = '+51';
  selectedOption: string = '';

  foods: any[] = [
    { value: 1, viewValue: 'Delantero' },
    { value: 2, viewValue: 'Arquero' },
    { value: 3, viewValue: 'Defensa' },
  ];

  userForm!: FormGroup;
  hidePwd = true;
  hideConfirmPwd = true;
  rol?:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private _authService: AuthService) {
    this.subscription.add(this._authService.userProfile$.subscribe((rol: string) => this.rol = rol));
    this.initFormUser();
  }

  initFormUser(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      ape_usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@(hotmail\\.com|gmail\\.com|cibertec\\.edu\\.pe)$")]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5), Validators.pattern('[^ ]*$')]],
      confirmPassword: ['', Validators.required]
    },{ validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  
    return null;
  }

  getErrorMessaje(field: string, length: number): string {
    let message: string = "";
    if (this.userForm.get(field)?.errors?.['required']) {
      message = 'Este campo es requerido';
    }
    else if (this.userForm.get(field)?.hasError('minlength')) {
      const minlength = this.userForm.get(field)?.errors?.['minlength'].requiredLength;
      message = `Minimo ${minlength} caracteres`;
    }
    else if (this.userForm.get(field)?.hasError('maxlength')) {
      const maxlength = this.userForm.get(field)?.errors?.['maxlength'].requiredLength;
      message = `Maximo ${maxlength} caracteres`;
    }
    else if (this.userForm.get(field)?.hasError('pattern')) {
      if (field == 'email') {
        message = 'Formato Incorrecto';
      }
      else if (field == 'password') {
        message = 'No se permiten espacios';
      }
    } 
    else if (this.userForm.get(field)?.hasError('passwordMismatch')) {
      message = 'El password no coincide';
    }
    return message;
  }

  btnInsertUser() {

    const user: IUsuario = {
      username: this.userForm.get('username')?.value,
      ape_usuario: this.userForm.get('ape_usuario')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      id_rol:3
    };
    
    console.log(user);

    this.subscription?.add(
      this._userService.createUsuario$(user).subscribe({
        next: response => {
          // this.router.navigate(['/home']);
          this.router.navigate(['/auth/login']);
          // if (response > 0) {
          //   this.router.navigate(['/home']);
          // }
          // else{
          //   console.log(response);
          // }
        
        },
        error: error => {
          console.error(error);
        }
      }));

  }



  uploadFile(event: any) {
    this.subscription = this.changeImg$(event).subscribe((img: string) => this.imageUrl = img);
  }

  changeImg$(event: any): Observable<string> {
    const img$ = new Observable<string>(observer => {
      let file = event.target.files[0];
      let reader = new FileReader();
      let img: string;
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          img = reader.result as string;
          observer.next(img);
          observer.complete();
        },
          reader.onerror = err => {
            observer.error(err);
          };
      }
    })
    return img$
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


