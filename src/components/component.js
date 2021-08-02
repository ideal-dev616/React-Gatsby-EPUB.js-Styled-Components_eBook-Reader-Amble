import * as React from 'react'
import { title } from 'amble.module.css'

const MyComponent = () => {
  return (
    <h1 className={title}>
      Super Sweet Title Page
    </h1>
  )
}

//export default MyComponent

//instruction from https://willhall.uk/storybook-gatsby/
export default {
  title: 'MyComponent',
  // Pass the component to allow the docs addon access to the metadata!
  component: MyComponent,
};