import { REGEX_FOR_EMAIL } from "../consts";

export class EmailHelper {
  static isEmailOk(email: string = "") {
    return email.match(REGEX_FOR_EMAIL);
  }
}
