import Navbar from "./components/Navbar";





function App() {

  //switch statement to toggle and display the components selected in nav bar using URL pathname and HREF
  // let component = ""
  // switch(window.location.pathname){
  //   case "/":
  //     component = < App />
  //     break
  //   case "/home":
  //     component = <Home />
  //     break
  //   case "/gallery":
  //     component = <Gallery />
  //     break
  //   case "/contact":
  //     component = <Contact />
  //     break
  //   case "/about":
  //     component = <About />
  //     break
  // }

  return (
    <>
      <Navbar />
    </>
  )
}


export default App;
