import React from 'react'

const App = () => {

  // function btnClicked() {
  //   console.log('button is clicked');
  // }

  // function inputchanging(val){
  //   console.log(val);
  // }
    
    const PageScrolling = (elem) => {
      if(elem>0) {
        console.log('seddha scrolling');
      }
      else {
        console.log('ulta scrolling');
      }
    }


  return (
      // {/* <h1>hello,chetan</h1>
      // <button onClick={btnClicked}>change user</button>

      // <button onClick={() => {
      //   console.log('button clicked');
      // }}>
      //   explore this</button> */}

      // {/* <input onChange={function(elem){
      //   inputchanging(elem.target.value)
      // }}

      // type='text' placeholder='Enter Name'></input> */}

      <div onWheel={(elem) => {
      
        PageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
    </div>
  )
}

export default App