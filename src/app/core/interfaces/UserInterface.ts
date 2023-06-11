export interface IUsuario {
    id_usuario?: number,
    username?: string,
    ape_usuario?: string,
    email?: string,
    password?: string,
    id_prefijo_telefono?: number,
    telefono_usuario?: string,
    id_tipodocumento?: number,
    num_documento?: string,
    id_Depa?: number,
    id_provincia?: number,
    id_dist?: number,
    direc_usuario?: string,
    id_rol?: number,
    id_especialidad?: number,
    fecha_registro?:Date,
    fecha_modificacion?:Date,
    roles?:IRol[]
}

export interface IRol {
    id_rol?: number,
    des_rol?: string,
    estado_rol?:string
}