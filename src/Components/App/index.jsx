import React from 'react'
import {Copy} from '../Copy'
import {CopyURL} from '../copyURL'

function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">React Copy</h1>
      
      <div className="flex justify-center">
        <div className="flex flex-col items-center mr-8">
          <CopyURL />
        </div>
  
        <div className="flex flex-col items-center">
          <Copy />
        </div>
      </div>
    </div>
  );
  
};

export default App;


export { App }