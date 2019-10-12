/*
 * Users Table
 * role_id: the id attached to their role (see Roles table)
 * org_id: the id attached to their organization
 * password: may not be needed, depending on auth used
 */

// role_id,
//   first_name,
//   last_name,
//   email,
//   org_id,
//   password,

export interface IRegister {
  role_id: number,
  first_name: string,
  last_name: string,
  email: string,
  org_id: number,
  password: string,
}