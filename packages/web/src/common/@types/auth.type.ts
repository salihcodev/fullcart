export type AuthResponse = {
  user: AuthedUser;
  accessToken: string;
};

export type AuthedUser = {
  id: string;
  name: string;
  email: string;
};

export type UserRole = {
  role: `regular` | `moderator` | `admin` | `manager`;
};

export type JWTTypes = {
  exp: number;
  role: string;
};
