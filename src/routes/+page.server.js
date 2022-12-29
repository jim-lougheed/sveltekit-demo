import createClient from '$lib/prismicio';

// @ts-ignore
export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', 'homepage');

	return {
		document
	};
}
