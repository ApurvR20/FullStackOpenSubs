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
      <Part number={1} part={props.parts[0].name} exercise={props.parts[0].exercises}  />
      <Part number={2} part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part number={3} part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}



const Total = (props) =>{
  return(
    <div>
      <p>
      Total no. of exercises = {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}
      </p>
    </div>
  
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name = {course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
