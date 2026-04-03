export const Conversations = () => {
    return (
        <div className="conversations">WORK IN PROGRESS</div>
    );
}
// TODO: FIX THIS :D
export function refindConversations() {
    let myConversations = JSON.parse(localStorage.getItem("myConversations") || "[]")
}
export function addConversation() {
    myConversations = localStorage.setItem("myConversations", [])
}