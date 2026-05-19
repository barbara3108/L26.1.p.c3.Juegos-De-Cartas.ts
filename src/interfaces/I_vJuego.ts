import Cl_mParticipante from "../models/Cl_mParticipante"

export interface I_vJuego{

    onNewParticipante(callback: ()=> void) : void;
    
    mostrarParticipante({
        participante,
        nombreMayor,
        porcentMenos10
    }:{
        participante: Cl_mParticipante[],
        nombreMayor: string, 
        porcentMenos10: number
    }): void;

}