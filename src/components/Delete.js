import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { useGlobalContext } from '../Context'

const Delete = () => {
    const{id} = useParams();
     const { items, setItems } = useGlobalContext();
     const deleteItem = (id)=>{
         setItems(items.filter((user)=> user.id!=id))
         
         
     }
    return (
      <div className="container">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure to delete Item?</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/">
              <Button variant="warning">Back Home</Button>
            </Link>

            <Link to="/">
              {" "}
              <Button variant="danger" onClick={() => deleteItem(id)}>
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default Delete
