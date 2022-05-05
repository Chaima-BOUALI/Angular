// export class User{
//   constructor(
//     email: string,
//     password: string,
//     confirmPassword: string,
//     username: string,) {}
//   email: string;
//     password: string;
//     confirmPassword: string;
//     username: string;
//     idUser: number; 
//     firstName:string;
//     lastName:string;
//     adress: string;
//     postalCode: string;
//   }

export interface User {
  id?: number,
  username: string,
  email?: string,
  password: string,
  firstname?: string,
  lastname?: string,
  role?: string[]
}