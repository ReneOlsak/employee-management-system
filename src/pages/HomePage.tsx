import React from 'react'
import { getAuth, signOut } from 'firebase/auth'

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Hello World</p>
      <button onClick={() => signOut(auth) }>Sign out of Firebase</button>
    </div>    
  )
}


export default HomePage