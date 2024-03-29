// Function that returns an array of objects with titles and clients without duplicates.
export function getTaskTitles(taskList) {
    let titles = []
    taskList.forEach(task => titles.push({ 
        "title": task.title,
        "client": task.client
    }))
    titles = titles.filter(
        (v, i, a) => a.findIndex(t => JSON.stringify(t) === JSON.stringify(v)) === i
    )
    return titles
}

