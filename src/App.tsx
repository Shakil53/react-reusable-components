import Button from "./components/ui/Button"
import Container from "./components/ui/Container"



function App() {
  

  return (
    <>
      <Container>
        <div className="px-2 py-2">
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-danger">Save</button>
         <Button className='bg-green-300' outline={true}></Button>
        </div>
        
      </Container> 
    </>
  )
}

export default App
