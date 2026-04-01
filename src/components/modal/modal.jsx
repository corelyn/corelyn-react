// THIS ENTIRE THING IS A TO-DO
import './modal.css'

export const Modal = (props) => {
        return (
                <div className="modal_holder">
                        <div className="modal">
                                <div className="modal_title">
                                        {props.title /* To use, do <Modal title="title goes here"/> */}
                                </div>
                                        {props.children /* Content ( <Modal>content is here</Modal> ) */}
                        </div>
                </div>
        )
}