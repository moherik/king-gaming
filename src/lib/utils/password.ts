import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

// scrypt is callback based so with promisify we can await it
const scryptAsync = promisify(scrypt);

export const Password = {
	hashPassword: async (password: string) => {
		const salt = randomBytes(16).toString('hex');
		const buf = (await scryptAsync(password, salt, 64)) as Buffer;
		return `${buf.toString('hex')}.${salt}`;
	},

	comparePassword: async (storedPassword: string, suppliedPassword: string): Promise<boolean> => {
		const [hashedPassword, salt] = storedPassword.split('.');
		const hashedPasswordBuf = Buffer.from(hashedPassword, 'hex');
		const suppliedPasswordBuf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
		return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
	}
};
