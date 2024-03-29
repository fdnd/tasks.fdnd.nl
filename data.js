'use strict'

require('dotenv').config()

const { graphql } = require('@octokit/graphql')
const fm = require('front-matter')
const fs = require('fs')

const taskList = []
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: 'token ' + process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  }
})

graphqlWithAuth(`{
  organization(login: "fdnd-task") {
    repositories(privacy:PUBLIC, first: 100, orderBy: {field: NAME, direction: ASC}) {
      nodes {
        name
        url
        description: object(expression: "main:.description") {
          ... on Blob {
            text
          }
        }
        repositoryTopics(first: 100) {
          edges {
            node {
              topic {
                name
              }
            }
          }
        }
        forkCount
      }
    }
  }
}`)
  .then(result => {
    result.organization.repositories.nodes.map(task => {
      taskList.push({
        ...fm(task.description.text).attributes,
        repository: task.name,
        topics: task.repositoryTopics.edges.map(edge => edge.node.topic.name),
        url: `${task.url}/blob/master/docs/INSTRUCTIONS.md`,
        forkCount:task.forkCount
      })
    })
  })
  .catch(error => {
    console.log('GitHub API Request failed: ', error.request, '\n', error.message)
  })
  .finally(() => {
    /* Write the GraphQL result to a json-file, to be fetched inside the App.svelte component. */
    fs.writeFile('public/data.json', 
      JSON.stringify(taskList),
      function (err) {
        if (err) {
          console.error('Crap happens');
        }
      }
    );
  })
