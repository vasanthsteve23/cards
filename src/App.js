import React from 'react';
import Card from './components/card';

function App(){
    return(
     <div>
       <main class="page-content">
         <Card 
           title="kids casual"
           para="Check out beautiful casual dresses for kids"
         />
         <Card 
             title="Kids formal"
             para="Check out beautiful formal dresses for kids"
         />
         <Card 
             title="Kids Traditional"
             para="Check out beautiful Traditional dresses for kids"
         />
         <Card 
             title="Kids toys"
             para="Check out beautiful toys for kids"
         />
       </main>
     </div>
    );
}

export default App;