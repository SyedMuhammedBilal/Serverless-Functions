import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getText } from './graphql/getText'
import { addText } from './graphql/addText'

const App = () => {
  const { loading, error, data } = useQuery(getText);
  console.log(data);

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>
  return (
    <div>
      <h1>Text Messages</h1>
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default App;
