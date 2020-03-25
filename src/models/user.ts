export interface User {
  _id: string;
  authType: 'google' | 'apple';
  createdAt: string;
  lastLoginAt: string;
}

export interface LoginResult {
  user: User;
  accessToken: {
    token: string;
    expiration: number;
  };
}
