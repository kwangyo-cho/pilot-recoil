import React, { Suspense } from 'react';
import Recoil from './components/Recoil';
import Test from './components/Test';
import Test1 from './components/Test1';
import {
  RecoilRoot
} from 'recoil';


function App() {
  return (
    <Suspense fallback={<div>...</div>}>
    <RecoilRoot>
      <div className="App">
        <Recoil></Recoil>
        <Test1></Test1>

        
        <Test></Test>
        
      </div>
    </RecoilRoot>
    </Suspense>
  );
}

export default App;
