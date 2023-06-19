import { ThemePalette } from "@angular/material/core";
import { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";

import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $: any;//usamos jquery

export function setMaterialColor(color: string): ThemePalette {
    let result : ThemePalette = 'primary'; //Por defecto
    const primary = 'primary';
    const warn = 'warn';
    const accent = 'accent';
    if (color.includes(primary)) {
        result = 'primary';
    }
    else if (color.includes(warn)) {
        result = 'warn';
    }
    else if (color.includes(accent)) {
        result = 'accent';
    }

    return result;
}

export function errors_msg(error:any){
  if(error.status = 401){
    toast_msg("Usuario No Encontrado","warning","top-end")
  }
  else{
    toast_msg("Ocurrio un error en la solicitud","error","top-end")
  }

}


export function toast_msg(txt:string,tp:SweetAlertIcon,pst:SweetAlertPosition) {
    const title = "";
    const text = txt ?  txt : "";
    const type = tp ? tp : undefined;
    const position = pst ?  pst : undefined;

    const toast = Swal.mixin({
      toast: true,
      icon: type,
      title: title,
      text:text,
      position: position,
    //   iconColor:iconColor,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    })
    toast.fire();
  
  }

  export function toastQuestion() {
    const title = "";
    const text = "¡Esta seguro que desea hacer esto?";
    const type = "question";
    const position = "center";

    const toast = Swal.mixin({
      toast: true,
      icon: type,
      title: title,
      text:text,
      position: position,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass:{
        confirmButton: 'btnSwallConfirm borderSwall',
        cancelButton: 'btnSwallCancel borderSwall',
        denyButton: 'btnSwallDeny borderSwall',
        container:'custom-swall-toast-container',
        popup:'custom-swall-toast-popup'
      },
    })
    toast.fire();

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

  export function swallLoader() {
    Swal.fire({
      allowOutsideClick: false,
      customClass: {
        popup: 'simple-swal-progres'
      },
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }
  