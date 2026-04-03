import { Conversations } from './conversations.jsx'
import { useEffect } from 'react';
import './sidebar.css'
import logo from '../../assets/logo.png'

import { useState } from 'react'
import { Modal } from './../modal/modal.jsx'


export const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <aside className="sidebar">
            <div className="sidebarBrand">
                <img src={logo} alt="Corelyn logo" className="sidebarLogo" />
                <span className="sidebarBrandTitle">Corelyn AI</span>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
                    <p>This is an example modal.</p>
                </Modal>
            </div>
            <Conversations />
        </aside>
    )
}