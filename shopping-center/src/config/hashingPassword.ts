import * as bcrypt from 'bcrypt';

export const decodePassword = async (
  password: string,
  salt: number,
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const encodePassword = async (
  oldPassword: string,
  newPassword: string,
): Promise<boolean> => {
  const result = await bcrypt.compare(newPassword, oldPassword);
  return result;
};
