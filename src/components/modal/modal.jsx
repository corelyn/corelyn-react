import './modal.css'
import { Button } from '../button/button'

// To use, do <Modal isOpen={true} title="title goes here">content is here</Modal>

export const Modal = (props) => {
        if (!props.isOpen) return null; 
        return (
                <div className="modal_holder">
                        <div className="modal" style={{ width: props.width || '400px', height: props.height || '200px' }}>
                                <div className="modal_title">
                                        {props.title /* To use, do <Modal title="title goes here"/> */}
                                        <Button className="modal_close" scale="5px" onClick={props.onClose} aria-label="Close Modal">
                                                x
                                        </Button>
                                </div>
                                <div className="modal_content">
                                        {props.children /* Content ( <Modal>content is here</Modal> ) */}
                                </div>
                        </div>
                </div>
        )
}