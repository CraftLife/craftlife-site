export enum Role {
  user = 'USER',
  staff = 'STAFF',
  admin = 'ADMIN'
}

declare module '#auth' {
  interface SessionData {
    email: String
    roles: String[]
    username: String
  }
}
