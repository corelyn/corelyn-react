import './modal.css'
import { Button } from '../button/button'
import X from '../../assets/button_images/x.svg'

// To use, do <Modal isOpen={true} title="title goes here">content is here</Modal>

export const Modal = (props) => {
        return (
                <div className={`modal_holder ${props.isOpen ? 'open' : ''}`}>
                        <div className={`modal ${props.isOpen ? 'open' : ''}`} style={{ width: props.width || '400px', height: props.height || '200px' }}>
                                <div className="modal_title">
                                        {props.title /* To use, do <Modal title="title goes here"/> */}
                                        <Button className="modal_close" scale="8px" onClick={props.onClose} aria-label="Close Modal">
                                                <img src={X} alt="Close" height="16" />
                                        </Button>
                                </div>
                                <div className="modal_content">
                                        {props.children /* Content ( <Modal>content is here</Modal> ) */}
                                </div>
                        </div>
                </div>
        )
}