export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export class UserModel {
  // _id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  createdAt: Date;
  updatedAt: Date;
}
