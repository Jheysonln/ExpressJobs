import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;//usamos jquery

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alertForm!: FormGroup;
  positionType = ['top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'];
  inputType = ['text', 'password', 'number'];
  iconType = ['success', 'info', 'warning', 'error', 'question'];

  constructor(fb: FormBuilder) {
    this.alertForm = fb.group({
      title: "",
      titleText: "text",
      type: 'success',
      position: 'center',
      iconColor: '',
      activeShowHideClass: true,
      showClass: fb.group({
        popup: { value: 'animate__animated animate__fadeInDown', disabled: false }
      }),
      hideClass: fb.group({
        popup: { value: 'animate__animated animate__fadeOutUp', disabled: false }
      }),
      backdrop: true,
      toast: false,
      inputActive: false,
      input: { value: this.inputType[0], disabled: true },
      with: '',
      customClassActions: false,
      customClassToast: { value: false, disabled: true },
      customClass: fb.group({
        confirmButton: { value: 'btnSwallConfirm borderSwall', disabled: true },
        cancelButton: { value: 'btnSwallCancel borderSwall', disabled: true },
        denyButton: { value: 'btnSwallDeny borderSwall', disabled: true },
        actions: { value: 'custom-actions-swall', disabled: true },
        container: { value: 'custom-swall-toast-container', disabled: true },
        popup: { value: 'custom-swall-toast-popup', disabled: true }
      }),
      timer: undefined,
      timerProgressBar: { value: false, disabled: true },
      heightAuto: false,
      allowOutsideClick: true,
      showConfirmButton: false,
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: { value: 'confirmar', disabled: true },
      denyButtonText: { value: 'denegar', disabled: true },
      cancelButtonText: { value: 'cancelar', disabled: true },
      focusConfirm: false,
      focusDeny: false,
      focusCancel: false,
      returnFocus: false,
      inputAutoFocus: true,
      showCloseButton: false,

      showLoaderOnConfirm: false,
      preConfirm: true,
    });


   this.setValueForm();
  }

  ngOnInit(): void {
  }

  get form() {
    return this.alertForm.value;
  }

  btnValidateSwall() {
    const isToast = this.alertForm.get('toast')?.value;
    if (isToast) {
      this.toastSwall();
    }
    else {
      this.simpleSwall();
    }
  }

  private simpleSwall() {
    const title = this.alertForm.get('title')?.value ? this.alertForm.get('title')?.value : 'No exists title';
    const text = this.alertForm.get('titleText')?.value ? this.alertForm.get('titleText')?.value : 'No exists texto';
    const type = this.alertForm.get('type')?.value;
    const position = this.alertForm.get('position')?.value;
    const iconColor = this.alertForm.get('iconColor')?.value ? this.alertForm.get('iconColor')?.value : null;
    const showClassPopup = this.alertForm.get('activeShowHideClass')?.value ? this.alertForm.get('showClass.popup')?.value : null;
    const hideClassPopup = this.alertForm.get('activeShowHideClass')?.value ? this.alertForm.get('hideClass.popup')?.value : null;
    const backdrop = this.alertForm.get('backdrop')?.value;
    const width = this.alertForm.get('with')?.value ? this.alertForm.get('with')?.value : null;
    const customClass = (): Object => {
      if (this.alertForm.get('customClassActions')?.value && this.alertForm.get('customClassToast')?.value) {
        const result = this.alertForm.get('customClass')?.value;
        return Object(result);
      }
      else if (this.alertForm.get('customClassActions')?.value) {
        const customClassActions = this.alertForm.get('customClass')?.value;
        const { actions, confirmButton, cancelButton, denyButton } = customClassActions;
        const result = { actions, confirmButton, cancelButton, denyButton };
        return Object(result);
      }
      else if (this.alertForm.get('customClassToast')?.value) {
        const customClassToast = this.alertForm.get('customClass')?.value;
        const { container, popup } = customClassToast;
        const result = { container, popup };
        return Object(result);
      }
      else {
        return Object({});
      }
    }
    const typeInput = this.alertForm.get('inputActive')?.value ? this.alertForm.get('input')?.value : null;
    const timer = this.alertForm.get('timer')?.value ? this.alertForm.get('timer')?.value : undefined;
    const timerProgressBar = (this.alertForm.get('timer')?.value > 0 && this.alertForm.get('timerProgressBar')?.value) ? true : false;
    const heightAuto = this.alertForm.get('heightAuto')?.value;
    const allowOutsideClick = this.alertForm.get('allowOutsideClick')?.value;
    const showConfirmButton = this.alertForm.get('showConfirmButton')?.value;
    const showDenyButton = this.alertForm.get('showDenyButton')?.value;
    const showCancelButton = this.alertForm.get('showCancelButton')?.value;
    const confirmButtonText = this.alertForm.get('confirmButtonText')?.value;
    const denyButtonText = this.alertForm.get('denyButtonText')?.value;
    const cancelButtonText = this.alertForm.get('cancelButtonText')?.value;

    const focusConfirm = this.alertForm.get('focusConfirm')?.value;
    const focusDeny = this.alertForm.get('focusDeny')?.value;
    const focusCancel = this.alertForm.get('focusCancel')?.value;
    const returnFocus = this.alertForm.get('returnFocus')?.value;
    const inputAutoFocus = this.alertForm.get('inputAutoFocus')?.value;
    const showCloseButton = this.alertForm.get('showCloseButton')?.value;

    Swal.fire({
      title: title,
      text: text,
      icon: type,
      position: position,
      iconColor: iconColor,
      backdrop: backdrop,
      showClass: {
        popup: showClassPopup,
      },
      hideClass: {
        popup: hideClassPopup,

      },
      width: width,
      customClass: customClass(),
      input: typeInput,
      timer: timer,
      timerProgressBar: timerProgressBar,
      heightAuto: heightAuto,
      allowOutsideClick: allowOutsideClick,
      showConfirmButton: showConfirmButton,
      showCancelButton: showCancelButton,
      showDenyButton: showDenyButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      denyButtonText: denyButtonText,
      focusDeny: focusDeny,
      focusCancel: focusCancel,
      focusConfirm: focusConfirm,
      returnFocus: returnFocus,
      inputAutoFocus: inputAutoFocus,
      showCloseButton: showCloseButton
    });
  }

  private toastSwall() {
    const title = this.alertForm.get('title')?.value;
    const text = this.alertForm.get('titleText')?.value;
    const type = this.alertForm.get('type')?.value;
    const position = this.alertForm.get('position')?.value;
    const iconColor = this.alertForm.get('iconColor')?.value ? this.alertForm.get('iconColor')?.value : null;
    const showClassPopup = this.alertForm.get('activeShowHideClass')?.value ? this.alertForm.get('showClass.popup')?.value : null;
    const hideClassPopup = this.alertForm.get('activeShowHideClass')?.value ? this.alertForm.get('hideClass.popup')?.value : null;
    const customClass = (): Object => {
      if (this.alertForm.get('customClassActions')?.value && this.alertForm.get('customClassToast')?.value) {
        const result = this.alertForm.get('customClass')?.value;
        return Object(result);
      }
      else if (this.alertForm.get('customClassActions')?.value) {
        const customClassActions = this.alertForm.get('customClass')?.value;
        const { actions, confirmButton, cancelButton, denyButton } = customClassActions;
        const result = { actions, confirmButton, cancelButton, denyButton };
        return Object(result);
      }
      else if (this.alertForm.get('customClassToast')?.value) {
        const customClassToast = this.alertForm.get('customClass')?.value;
        const { container, popup } = customClassToast;
        const result = { container, popup };
        return Object(result);
      }
      else {
        return Object({});
      }
    }
    const typeInput = this.alertForm.get('inputActive')?.value ? this.alertForm.get('input')?.value : null;
    const timer = this.alertForm.get('timer')?.value ? this.alertForm.get('timer')?.value : undefined;
    const timerProgressBar = (this.alertForm.get('timer')?.value > 0 && this.alertForm.get('timerProgressBar')?.value) ? true : false;
    const showConfirmButton = this.alertForm.get('showConfirmButton')?.value;
    const showDenyButton = this.alertForm.get('showDenyButton')?.value;
    const showCancelButton = this.alertForm.get('showCancelButton')?.value;
    const confirmButtonText = this.alertForm.get('confirmButtonText')?.value;
    const denyButtonText = this.alertForm.get('denyButtonText')?.value;
    const cancelButtonText = this.alertForm.get('cancelButtonText')?.value;
    const inputAutoFocus = this.alertForm.get('inputAutoFocus')?.value;
    const showCloseButton = this.alertForm.get('showCloseButton')?.value;

    const toast = Swal.mixin({
      toast: true,
      icon: type,
      title: title,
      text:text,
      position: position,
      iconColor:iconColor,
      showClass: {
        popup: showClassPopup
      },
      hideClass: {
        popup: hideClassPopup
      },
      customClass: customClass(),
      input: typeInput,
      timer: timer,
      timerProgressBar: timerProgressBar,
      showConfirmButton: showConfirmButton,
      showCancelButton: showCancelButton,
      showDenyButton: showDenyButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      denyButtonText: denyButtonText,
      inputAutoFocus: inputAutoFocus,
      showCloseButton: showCloseButton

    })
    toast.fire();

    if(this.alertForm.get('toast')?.value && this.alertForm.get('customClassToast')?.value){
      let isClickInToast = false;
      $(".custom-swall-toast-popup").click(() => isClickInToast = true);
      $(".custom-swall-toast-container").click((event: any) => {
        if (isClickInToast) {
          event.stopPropagation();
          isClickInToast = false;
        }
        else {
          Swal.close();
        }
      });
    }
  
  }

 setValueForm(){
  this.alertForm.get("inputActive")?.valueChanges.subscribe(x => {
    x === true ? this.alertForm.controls['input'].enable() : this.alertForm.controls['input'].disable();
  });
  this.alertForm.get("activeShowHideClass")?.valueChanges.subscribe(x => {
    x === true ? this.alertForm.get('showClass.popup')?.enable() : this.alertForm.get('showClass.popup')?.disable();
    x === true ? this.alertForm.get('hideClass.popup')?.enable() : this.alertForm.get('hideClass.popup')?.disable();
  });
  this.alertForm.get("showConfirmButton")?.valueChanges.subscribe(x => {
    x === true ? this.alertForm.controls['confirmButtonText'].enable() : this.alertForm.controls['confirmButtonText'].enable();
  });
  this.alertForm.get("showDenyButton")?.valueChanges.subscribe(x => {
    x === true ? this.alertForm.controls['denyButtonText'].enable() : this.alertForm.controls['denyButtonText'].enable();;
  });
  this.alertForm.get("showCancelButton")?.valueChanges.subscribe(x => {
    x === true ? this.alertForm.controls['cancelButtonText'].enable() : this.alertForm.controls['cancelButtonText'].enable();;
  });
  this.alertForm.get("toast")?.valueChanges.subscribe(x => {
    if (x === true) {
      this.alertForm.controls['customClassToast'].enable();
    }
    else {
      this.alertForm.controls['customClassToast'].disable();
      this.alertForm.get('customClassToast')?.setValue(false);
    }
  });

  this.alertForm.get("timer")?.valueChanges.subscribe(x => {
    if (x > 0) {
      this.alertForm.controls['timerProgressBar'].enable();
    }
    else {
      this.alertForm.controls['timerProgressBar'].disable();
      this.alertForm.get('timerProgressBar')?.setValue(false);
    }
  });
 }

  public saveFile(fileName: any): void {
    // ... save file

  }

  public handleDenial(): void {
    // ... don't save file and quit
  }

  public handleDismiss(dismissMethod: string | any): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

  public deleteFile(file: any) {

  }

  public sendForm(value: any) {

  }

  public swalDidOpen(d: any) {
  }

  public swalWillClose(d: any) {
    clearInterval(d.timerInterval)
  }

}
