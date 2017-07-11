//Funcion que retorna true si se visita dese un telefono
export function isMobile ( ua ){
    return /mobile/i.test( ua );
}