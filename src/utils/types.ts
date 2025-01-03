export type UserData = {
  isAuthenticated: boolean;
  userType: string | null;
};

export type DecodedToken = {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: string;
  exp: number;
};
