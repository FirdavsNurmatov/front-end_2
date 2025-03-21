import * as bcrypt from 'bcrypt';

export const hashPassword = async (
  password: string,
  salt: number,
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  oldPassword: string,
  newPassword: string,
): Promise<boolean> => {
  const result = await bcrypt.compare(newPassword, oldPassword);
  return result;
};
