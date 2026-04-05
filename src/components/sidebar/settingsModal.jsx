import { useState } from 'react'
import { Modal } from './../modal/modal.jsx'
import { Button } from '../button/button.jsx'
import './sidebar.css'
export const SettingsModal = ({ isOpen, onClose }) => {

    return (
        <Modal height="400px" className="settings-modal" isOpen={isOpen} onClose={onClose} title="Settings">
            <div className='settings'>
            <p>API Key:</p>
            {/* Input will go here :3 */}
            <p>Default Provider:</p>
            {/* Input will go here :3 */}
            <p>Default Modal:</p>
            {/* Input will go here :3 */}
            <p>System Prompt:</p>
            {/* Input will go here :3 */}
            <p>Triggers: Not here yet {":("}</p>
            <Button scale="7px">Credits</Button>
            </div>
            <Modal title="Credits" width="300px" height="150px" isOpen={false} onClose={() => {}}></Modal>
        </Modal>
    )
}