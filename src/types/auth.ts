export type SignUpTypes = {
  email: string;
  password: string;
  checkPassword: string;
  nickname: string;
};

export type SignInTypes = {
  email: string;
  password: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  nickname: string;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setNickname: (nickname: string) => void;
};
