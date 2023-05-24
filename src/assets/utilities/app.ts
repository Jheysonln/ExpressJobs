import { ThemePalette } from "@angular/material/core";

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