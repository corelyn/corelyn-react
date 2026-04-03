import { Sidebar } from '../components/sidebar/sidebar'
import { Chatarea } from '../components/chatArea/chatArea'

export const Chat = () => {
    return (
        <div className="chat" style={{ display: 'flex', height: '100vh'}}>
            <Sidebar />
            <Chatarea />
            
        </div>
    )
} 