import { Identity } from "@semaphore-protocol/identity"
import { useState } from "react";

function App() {

  const [identity,setIdentity] = useState();

  function newIdentityGenerator(){
    const newIdentity = new Identity();
    console.log(newIdentity);

  }



  return (
    <div>
      <h1>Hello ZK World!</h1>
      <button onClick={newIdentityGenerator}></button>
      <p>{identity}</p>
    </div>
  );
}

export default App;
