import { useState } from "react";
import Modal from "./Modal";
import Backdrop from './Backdrop';

const Todo = ({title}) => {
    // modal initial state should be false
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        // change the modal state to be opened
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="actions">
                <button 
                    className="btn" 
                    onClick={deleteHandler}
                >
                    Delete
                </button>
            </div>
            { modalIsOpen ?  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
            { modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null }
        </div>
    )
}

export default Todo;