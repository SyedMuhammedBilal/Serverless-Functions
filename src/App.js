import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getText } from './graphql/getText'
import { addText } from './graphql/addText'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
