import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // set up state value, with default index being 0, which will show the first item in the "people" array
  const [index, setIndex] = useState(0);
  // lets destructure each item in the "people" array, and set the index to "index" so we will see different items as the value changes...
  const { name, job, image, text } = people[index];

  // let's set up functionality for when we reach the end of the "people" array, we loop back to the beginning...
  const checkNumber = (number) => {
    // if the number is greater than the last index number in the array...
    if(number > people.length - 1){
      // go back to the start of the array
      return 0
    }
    // if the number is less than 0...
    if(number < 0) {
      // go to the last index number in the array
      return people.length - 1
    }
    // otherwise just go to the index number in the array as dictated by "prev" and "next"
    return number
  }

  // let's set up functionality for the next button and prev button...
  const nextPerson = () => {
    setIndex((index) => {
      // simply add 1 to the current index and give it a variable name
      let newIndex = index + 1;
      // return the new index using the "checkNumber" function
      return checkNumber (newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      // subtract 1 from the current index...
      let newIndex = index - 1;
      // return the new index using the "checkNumber" function
      return checkNumber (newIndex);
    })
  }

  // let's set up functionality for the "random" button using Math.floor and Math.random...
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
// even though it's random, there is still a chance of the index number repeating
// so let's make sure that doesn't happen by saying "if the next random number is the same as the current random number, just add 1"
    if(randomNumber === index){
      randomNumber = index +1
    }
    // so now we combine the functions so we know there is no repetition(randomNumber) and the looping back capability (checkNumber)
    setIndex(checkNumber(randomNumber))
  }

  // this will return an article with the "person's" image, name, job and info...
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      {/* lets make a "previous", "next" and "random" button... */}
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
        <button className="random-btn">
          suprise me
        </button>
    </article>
  );
};

export default Review;
