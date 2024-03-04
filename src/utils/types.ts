export type Student = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Teacher = {
  name: string;
  email: string;
  password: string;
  isCoordinator: boolean;
};

export type JwtPayload = {
  id: string;
};
