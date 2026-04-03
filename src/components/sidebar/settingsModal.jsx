import { useState } from 'react'
import { Modal } from './../modal/modal.jsx'

export const SettingsModal = ({ isOpen, onClose }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Settings">
            <p>Settings will go here.</p>
        </Modal>
    )
}