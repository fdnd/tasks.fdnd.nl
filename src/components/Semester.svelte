<script>
    import FilterSprint from "./FilterSprint.svelte"
    import { tasks } from '../stores/tasks.js';

    export let semester

    // Make sure all tasks have a semesterName value.
    const filteredTasks = $tasks.filter(task => {
	    return task.semesterName !== undefined
    })

    $tasks = filteredTasks

</script>

<section>
    <h2>Semester {semester}: {$tasks.filter(task => task.semester === semester)[0].semesterName}</h2>
    <FilterSprint bind:semester />
</section>

<style>
    section {
        background-color: var(--highlight-secondary);
        padding:0;
        position:relative;
    }
    h2 {
        background: var(--highlight-secondary);
        padding:0 1rem;
        border-radius: var(--radius);
    }

    @media (min-width: 40em) {
		section {
			padding:1rem 1rem 0;
            border-radius: var(--radius);
            margin:5rem 0 1rem;
            max-width:80em;
		}
        h2 {
            padding:1rem;
            position: absolute;
            top: -4.7rem;
            margin-left: -1rem;
        }
	}
</style>