import React from "react"
import people from "./data"
import Review from "./Components/Review"

export default function App()
{
  let [index,setIndex] = React.useState(0)
  let person = people[index]

  function nextPerson()
  {
     setIndex((number)=>
     {
        if(number < people.length -1)
        {
           return number + 1
        }
        else
        {
          return 0
        }
     })
  }

  
  function prevPerson()
  {
     setIndex((number)=>
     {
        if(number > 0)
        {
           return number - 1
        }
        else
        {
          return people.length -1
        }
     })
  }

  function randomPerson()
  {
    let random = Math.floor(Math.random() * people.length)
    if(random == index)
    {
      random = random + 1
      if(random > people.length - 1)
      {
        random  = random - 1
      }
    }
    setIndex(random)
  }

  return (
    <main>
      <div className="container">
       <section className="box">
          <h1><center>Our <span>Reviews</span></center></h1>
          <Review props={person} nextPerson={nextPerson} prevPerson={prevPerson} randomPerson={randomPerson} />
       </section>
      </div>
    </main>
  )
}