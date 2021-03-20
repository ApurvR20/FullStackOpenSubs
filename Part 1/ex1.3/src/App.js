import React from 'react'

const Header = (props) =>
{
  return(
    <div>
      <p>
        Course = {props.name}
      </p>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      Part {props.number} : {props.part} Exercises = {props.exercise}
      <br/>
    </div>
  )
}

const Content = (props) =>
{
  return(
    <div>
      <Part number={1} part={props.part1} exercise={props.exercises1}  />
      <Part number={2} part={props.part2} exercise={props.exercises2}  />
      <Part number={3} part={props.part3} exercise={props.exercises3}  />
    </div>
  )
}



const Total = (props) =>{
  return(
    <div>
      <p>
      Total no. of exercises = {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {course} />
      <Content part1 = {part1['name']} exercises1={part1['exercises']} part2={part2['name']} exercises2={part2['exercises']} part3={part3['name']} exercises3={part3['exercises']} />
      <Total exercises1={part1['exercises']} exercises2={part2['exercises']} exercises3={part3['exercises']} />
    </div>
  )
}

export default App
