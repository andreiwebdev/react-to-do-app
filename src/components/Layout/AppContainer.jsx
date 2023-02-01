import React from 'react'

const AppContainer = (props) => {
  return (
    <div className="App flex flex-col items-center justify-center w-full h-screen">
      {props.children}
    </div>
  )
}

export default AppContainer
