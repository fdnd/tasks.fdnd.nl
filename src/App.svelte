<script>
	import { onMount } from "svelte"
	import { getSemesterSprintName } from "./helpers/utils/getSemesterSprintName.js"
	import { addDifficulty } from './helpers/utils/addDifficulty.js'
  	import { getSemesterTitles } from "./helpers/utils/getSemesterTitles.js"
  
	import FilterSemester from "./components/FilterSemester.svelte"	
	import { tasks } from './stores/tasks.js';
	

	let taskList = [] // Original copy of the data.
	let searchTaskList = [] // Copy of the data to be used in the search
	let semesters = []
  
	/*When App.svelte mounts, this function to fetch the data will run.*/
	onMount(async () => {
		const dataResponse = await fetch('data.json')
		taskList = await dataResponse.json()

		const mainTasks = taskList.filter(task => {
			return !task.topics.includes('subtask') 
		})

		// Add semester and sprint name to the task data list and put it in the search task list array.
		searchTaskList = getSemesterSprintName(mainTasks)

		// A list of semester names to be displayed.
		semesters = getSemesterTitles(mainTasks)

		// Remove strings from semester array
		semesters = semesters.filter(semester => {return typeof semester !== 'string'})

		// Sort semesters in numerical order
		semesters.sort((a, b) => a-b)
		
		/*
		Add difficulty property to the taskList
		*/
		const taskies = addDifficulty(searchTaskList)
		
		$tasks = taskies
	})

</script>

<header>
	<h1><strong>Frontend</strong>Design & Development</h1>
	<img src="/assets/images/hogeschool-van-amsterdam.svg" alt="Hogeschool van Amsterdam">
</header>

<main>
	<h2>Leertaken</h2>
	<FilterSemester bind:semesters />
</main>

<footer>
	<img src="/assets/images/hvapayoff.svg" alt="Hogeschool van Amsterdam">
</footer>

<style>
	header {
		display:flex;
		flex-direction:row;
		justify-content: space-between;
		align-items: center;
		justify-content: flex-end;
	}
	header img,
	footer img {
		width:30%;
		margin-right:1.25rem;
	}
	h1 {
		color: var(--primary);
		font-size: calc(12px + 2 * ((100vw - 320px) / 680));
		font-weight: normal;
		line-height:1.25;
		margin: 0 1rem;
		text-align:right;
		padding:.1rem 1rem .1rem 0;
		border-right:1px solid var(--primary);
		display: flex;
    	flex-direction: column;
   		align-items: flex-end;
	}
	h1 strong {
		font-weight: normal;
		position: relative;
		display:flex;
	}
	
	main {
		display: flex;
		flex-direction: column;
		margin: 0;
		color:var(--secondary);
	}
	main > h2 {
		color:var(--highlight-primary);
		font-weight: 100;
		font-size: 2em;
		align-self:flex-start;
		margin-left:1rem;
	}
	footer {
		display:flex;
		justify-content: flex-end;
		margin-top:1rem;
		padding:1rem 0 1rem 1rem
	}
	@media (min-width: 40em) {
		header {
			flex-wrap:wrap;
		}
		header img,
		footer img {
			width:10em;
		}

		main > h2 {
			grid-column: 1 / -1;
			justify-self: start;
			border: 3px solid var(--highlight-primary);
			font-weight: 100;
			border-radius: calc(4 * var(--radius));
			padding: .5rem 2rem;
			box-shadow: -1rem .5rem 0 0 var(--highlight-primary);
			margin-left:1rem
		}
		
	}
</style>