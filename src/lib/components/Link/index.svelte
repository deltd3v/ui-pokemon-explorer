<script lang="ts">
	export let url = '/';
	export let label = 'Link';
	export let path: string;
</script>

<li class:active="{path === url}">
	<a sveltekit:prefetch href="{url}">{label}</a>
</li>

<style>
	li {
		@apply list-none;
	}

	a {
		@apply mx-1;
		@apply no-underline;
	}

	li.active a {
		@apply font-extrabold;
	}

	li:focus-within a {
		@apply underline;
	}
</style>
