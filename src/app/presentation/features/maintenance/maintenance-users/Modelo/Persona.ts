export class Persona{
    id_usuario: number;
    nom_usuario: String;
    ape_usuario: String;
    correo_usuario: String;
    password_usuario: String;
    direc_usuario: String;
    num_documento: String;
    id_Depa : String;
    id_dist : String;
    id_provincia : String;
    telefono_usuario: String;
    id_prefijo_telefono: String;
      id_tipodocumento: String;
      id_rol: Number;
      id_especialidad: Number;

    constructor(){
        this.id_usuario = 0;
        this.nom_usuario = "";
        this.ape_usuario = "";
        this.correo_usuario = "";
        this.password_usuario = "";
        this.direc_usuario = "";
        this.num_documento = "";
        this.id_Depa = "";
        this.id_dist = "";
        this.id_provincia = "";
        this.telefono_usuario = "";
        this.id_prefijo_telefono= "1";
        this.id_tipodocumento= "1";
        this.id_rol= 1;
        this.id_especialidad= 1;
    }
}