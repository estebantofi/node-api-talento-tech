import { findByCredentials } from "../models/user.model.js";

export const loginWithUsernamePassword = (username, password) =>
  findByCredentials(username, password);
