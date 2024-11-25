export interface Root {
  success: boolean;
  data: Data;
}

export interface Data {
  user: User;
  profile: Profile;
}

export interface User {
  password: string;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  groups: boolean;
  user_permissions: false;
}

export interface Profile {
  id: number;
  phone_number: string;
  profile_type: string;
  avatar: string;
  bio: string;
  user: number;
}

export interface SignUpPayload {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
  profile_type: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}
