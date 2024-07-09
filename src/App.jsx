import Body from "./Componants/Body"
import Footer from "./Componants/Footer"
import Header from "./Componants/Header"



function App() {


  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between ">
      <Header/>
      <Body/>
      <Footer/>
      </div>
        
    </>
  )
}

export default App
