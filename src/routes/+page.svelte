<script>
	// @ts-nocheck

	import { SliceZone } from '@prismicio/svelte';
	import { dev } from '$app/environment';

	import * as components from '$lib/slices';

	/**
	 * @type {{ document: { body: any; }; }}
	 */
	export let data;
</script>

<SliceZone slices={data.document.data.body} {components} {dev} />
