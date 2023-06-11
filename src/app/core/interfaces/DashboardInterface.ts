export interface IMenu {
    id_menu: number,
    title?: string,
    description?: string,
    url?: string,
    icon?: string,
    provided?: string,
    active?: boolean,
    class_active?: string
    subitem?: ISubmenu[]
}

export interface ISubmenu {
    id_submenu: number,
    id_menu: number,
    description?: string,
    url?: string,
    active?: boolean,
    class_active?: string
}