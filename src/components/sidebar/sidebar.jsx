import { Conversations } from './conversations.jsx'
import { useState, useEffect } from 'react';
import './sidebar.css'
import logo from '../../assets/logo.png'
import { SettingsModal } from './settingsModal.jsx';
import { Button } from '../button/button.jsx';
import settings from '../../assets/button_images/settings.svg'

export const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <aside className="sidebar">
            <div className="sidebarBrand">
                <img src={logo} alt="Corelyn logo" className="sidebarLogo" />
                <span className="sidebarBrandTitle">Corelyn AI</span>
                <div className="sidebar_buttons">
                    <Button className="settingsButton" scale="5px" onClick={() => setIsModalOpen(true)} aria-label="Open Settings"><img src={settings} alt="Settings" height="16" /></Button>
                    <SettingsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
            <Conversations />
        </aside>
    )
}