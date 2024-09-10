import { db } from '$lib/db';

export type CreateStoreParams = {
	memberId: string;
	name: string;
	description: string;
	email: string;
	phone: string;
	domain: string;
};

export const Store = {
	getStoreByMember: async (memberId: string) => {
		const res = await db.query('select * from mt_store where id_member = $1', [memberId]);
		return res.rows[0] ?? null;
	},
	createStore: async (data: CreateStoreParams) => {
		try {
			const res = await db.query(
				'insert into mt_store (id_member, name, description, email, phone, domain) values ($1, $2, $3, $4, $5, $6) returning id',
				[data.memberId, data.name, data.description, data.email, data.phone, data.domain]
			);

			return {
				error: null,
				data: res.rows[0] ?? null
			};
		} catch (error: any) {
			console.log(error);
			if (error.code == 23505) {
				return {
					error: 'Domain sudah terdaftar',
					data: null
				};
			}

			return {
				error: 'Terjadi kesalahan',
				data: null
			};
		}
	}
};
