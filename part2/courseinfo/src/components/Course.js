import React from 'react'

const Header = ({ courses }) => {
    return (
      <h1>{courses.name}</h1>
    )
  }
  
  const Total = ({ courses }) => {
    const sum = courses.parts.reduce((sum, part) => sum + part.exercises, 0);
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ courses }) => {
    return (
      <div>
          
        {courses.parts.map((part, i) => 
        <Part key={part.id} part={courses.parts[i]} />
        )}
        
      </div>
    )
  }

const Course = ({ courses }) => {
    return (
        <div>
        
        <Header courses={courses} />
        <Content courses={courses} />
        <Total courses={courses} />
        </div>
    )
}

export default Course;