<script lang="ts">
	import { onMount } from 'svelte';

	let editor, quill;

	onMount(async () => {
		const { default: Quill } = await import('quill');

		window['Quill'] = Quill;
		editor = document.getElementById('editor');

		await import('quill-image-drop-module/src/ImageDrop').then(mod => {
			Quill.register('modules/imageDrop', mod.ImageDrop);
		});

		await import('quill-resize-module/src/QuillResize').then(mod => {
			Quill.register('modules/resize', mod.default);
		});

		quill = new Quill(editor, {
			modules: {
				toolbar: [
					['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
					['clean'],

					[{ size: ['small', 'medium', 'large', 'huge'] }],
					[{ header: [1, 2, 3, 4, 5, 6, 7] }],

					[{ align: [] }],
					[{ list: 'ordered' }, { list: 'bullet' }],
					[{ indent: '-1' }, { indent: '+1' }],
					[{ font: [] }],

					[{ color: [] }, { background: [] }],

					['image', 'link']
				],

				history: {
					delay: 1000,
					maxStack: 50,
					userOnly: false
				},

				imageDrop: true,
				resize: {
					modules: ['Resize', 'DisplaySize' /*'Toolbar'*/]
				}
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});
	});
</script>

<div class="editor-container">
	<div id="editor"></div>
</div>

<style>
	.editor-container {
		width: 60vw;
	}
</style>
