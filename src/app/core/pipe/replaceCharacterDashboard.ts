import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacterDashboard'
})
export class ReplaceCharacterDashboard implements PipeTransform {
    transform(value: string | undefined): string {
        if (!value) return '';
    
        // Elimina espacios en blanco y convierte a minúsculas
        let transformedText = value.trim().toLowerCase();
    
        // Reemplaza los espacios en blanco con guiones
        transformedText = transformedText.replace(/\s+/g, '-');
    
        return transformedText;
      }
}