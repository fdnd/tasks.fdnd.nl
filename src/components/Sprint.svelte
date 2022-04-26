<script>
    import TaskList from "../components/TaskList.svelte"

    export let sprint
    export let semesterTasks
	export let semester

	let isActive = false

	function hash() {
		return sprint.sprint.replace(/ /g, "-").toLowerCase()
	}

</script>

<section class:active={ isActive } id="{ hash() }">
	<a href="/#{ hash() }" on:click|preventDefault={ () => isActive = !isActive }>
		<h3>
			Sprint: <strong>{ sprint.sprint }</strong>
			
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<line x1="12" y1="5" x2="12" y2="19" />
					<line x1="18" y1="13" x2="12" y2="19" />
					<line x1="6" y1="13" x2="12" y2="19" />
				</svg>
		
		</h3>
	</a>

    <TaskList bind:sprint bind:semesterTasks bind:semester  />
    
</section>

<style>
	section {
		position: relative;
		background-color: var(--secondary);
		overflow:hidden;
		
	}
	a {
        border:none;
		background-color:transparent;
		text-decoration:none;
		display:block;
		padding: 1rem 1rem .5rem;
		position: relative;
		z-index:1
    }
	a:hover {
		background-color: rgba(255,255,255, 0.1)
	}
	h3 {
		color: var(--primary);
		margin: 0 0 .5rem;
		font-weight: normal;
		pointer-events: none;
	}
	h3 svg {
		position: absolute;
		right:1rem;
		top:1rem;
		width:2rem;
        height:2rem;
	}

	section > :global(main) {
		display:none;
	}
	section.active :global(main)  {
		display: grid
	}
	section :global(form) {
		opacity:0;
		transition: .25s .35s;
	}
	section.active :global(form)  {
		opacity:1;
	}
	svg {
		stroke: var(--primary);
		transition:.25s
	}
	section.active svg {
		transform:rotate(180deg)
	}

	@media (min-width: 40em) {
		section {
			border-radius: var(--radius);
			margin-bottom: 1rem;
		}
	}
</style>