import React from 'react'

const Frame = ({ children }) => {
  return (
    <div>
      <h1>This is the page title!</h1>
      { children }
    </div>
  )
}
export default Frame
//instruction from https://willhall.uk/storybook-gatsby/
//export default {
//    title: 'Frame',
    // Pass the component to allow the docs addon access to the metadata!
 //   component: Frame,
 // };