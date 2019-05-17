import React from 'react'
import Paper from '@material-ui/core/Paper'

export default function About() {
  return (
    <div>
      <Paper 
        elevation={1}
        style={
            {
                padding: '50px',
                margin: '50px 200px 0 200px'
            }
        }
      >
        <h1 id="imagefinderapp">Image Finder App</h1>

        <h5 id="bychinedudara">by Chinedu Dara</h5>
        <p>An image search app built with react using Pixabay API. I used Google's Material-UI for the UI and i'm loving how sleek and minimalist it turned out :heart_eyes:. </p>

        <p><strong>Usage is simple:</strong></p>

        <ol>
        <li>Enter any keyword into the search bar (Search is triggered onChange)</li>

        <li>You can limit result count using the dropdown. </li>

        <li>Click the :mag: on a result to display the image in a modal.</li>
        </ol>
      </Paper>
    </div>
  )
}
