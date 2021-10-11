export interface ContactoInterface {
    id?: number;
    nombre?: string;
    telefono?: string;
    email?: string;
}
export const ContactoInitialState: ContactoInterface = {
    id: 0,
    nombre: "",
    telefono: "",
    email: ""
}