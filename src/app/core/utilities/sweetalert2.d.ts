//LLamamos solo al js de sweetalert2
declare module 'sweetalert2/dist/sweetalert2.js' {
    import SwalNamespace from 'sweetalert2';
  
    const Swal: typeof SwalNamespace;
    export default Swal;
  }