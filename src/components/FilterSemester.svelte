<script>
    import Semester from "./Semester.svelte"
    export let semesters
	
    
</script>

{#each semesters as semester}
    <Semester bind:semester />
{/each}
