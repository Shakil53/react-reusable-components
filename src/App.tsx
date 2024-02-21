import { useState } from "react"
import Button from "./components/ui/Button"
import Container from "./components/ui/Container"
import Modal from "./components/ui/Modal";



function App() {
  
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev)
  }
  return (
    <>
      <Container>
        <div className="px-2 py-2">
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-danger">Save</button>
          <Button onClick={()=> setModal(prev => !prev)}>Open Modal</Button>
          
          <Modal isOpen={modal} onClose={handleModalClose}>
            <Modal.Header>
              <h1 >This is modal <title></title></h1>
                <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>
            <p className="text-sm">This is a Content</p>
          </Modal>
        </div>
        
      </Container> 
    </>
  )
}

export default App
