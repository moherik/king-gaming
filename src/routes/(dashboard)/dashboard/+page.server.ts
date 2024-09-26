import { getTransactions } from '$lib/models/transactions';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	const session = await locals.auth();

	const limit = 10;
	const page = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;

	const { count, data: transactions } = await getTransactions({
		idMember: session?.user?.id?.toString()!,
		startDate: new Date(),
		endDate: new Date(),
		limit,
		offset: limit * page
	});

	return {
		transactions,
		total: count,
		limit
	};
};
