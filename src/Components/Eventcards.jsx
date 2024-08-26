import React from 'react'
import Eventcard from './Eventcard'

const Eventcards = () => {

  const EventcardData = [
    {
      width1: '28vw',
      height1: '70vh',
      image1: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061029_Rectangle%252015006-p-500.png",
      parag1: "Why Refokus is the Best Partner to Build Your Venture Capital Website",
      width2: '32vw',
      height2: '42vh',
      image2: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png",
      parag2: "Webflow Agency Case Study of Refokus as a leading Webflow Enterprise Partner",
    }
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center gap-8  py-10">
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col gap-10">
          {EventcardData.map((show, index) => {
            return <Eventcard key={index} data={show} />
          })}
        </div>
      </div>
    </>
  )
}

export default Eventcards