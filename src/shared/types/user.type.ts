export enum UserType {
  Pro = "pro",
  Default = "default",
}

export type User = {
  name: string; // 1-15 symbols
  email: string; // unique
  avatarUrl?: string; // .jpg, .png
  password: string; // 6-12 symbols
  type: UserType;
};
