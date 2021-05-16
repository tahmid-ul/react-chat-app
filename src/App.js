import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID="337235c2-0c8d-46a1-aee7-408765ffc6bc"
			userName="bruce"
			userSecret="tk0041"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;