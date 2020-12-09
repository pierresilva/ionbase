import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Platform} from "@ionic/angular";
import {ApiService} from "../../@shared/services/api.service";
import {ToastService} from "../../@shared/services/toast.service";
import {AlertService} from "../../@shared/services/alert.service";
import {AuthService} from "../../@shared/services/auth.service";
import {SplitPanelService} from "../../@shared/services/split-panel.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm: FormGroup;

  version: string | null = environment.version;
  error: string | undefined;
  isLoading = false;
  environment = environment;

  model: any = {
    name: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    accept_terms_conditions: false
  };

  registered = false;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private platform: Platform,
      private api: ApiService,
      private toast: ToastService,
      private alert: AlertService,
      public auth: AuthService,
      public splitPanel: SplitPanelService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.splitPanel.show.next(false);
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  async register() {

    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm);
      return;
    }

    this.model.name = this.model.first_name + ' ' + this.model.last_name

    this.api.post('auth/register', this.model)
        .subscribe(
            (res: any) => {
              this.toast.present(res.message, 'toast-success');
              this.registered = true;
            },
            (err: any) => {

            }
        );
  }

  showPassword(input: any): any {
    const passwordField = document.getElementById(input);
    const passwordButton  = document.getElementById(input + '-show');
    passwordField.setAttribute('type', (passwordField.getAttribute('type') === 'password') ?  'text' : 'password');
    passwordButton.setAttribute('name', (passwordButton.getAttribute('name') === 'eye-outline') ?  'eye-off-outline' : 'eye-outline');
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  resendVerificationEmail() {
    this.api.post('auth/email/resend', {
      email: this.model.email
    })
        .subscribe(
            (res: any) => {
            this.toast.present(res.message, 'toast-success');
            },
            (err: any) => {

            }
        );
  }

}
