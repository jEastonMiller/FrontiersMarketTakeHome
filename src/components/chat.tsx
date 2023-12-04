import {useState} from 'react';
import chatBubble from '../assets/chatBubble.png';
import ChatWindow from './chatwindow';
/**
 * Renders the main App component.
 * @return {JSX.Element}
 */
interface ChatProps {
  userID: string
}
export default function Chat(props: ChatProps): JSX.Element {
  const [drawerToggle, setDrawerToggle] = useState(false);
  return (
    <div className='fixed bottom-6 right-6 z-30'>
      { drawerToggle &&
        <ChatWindow setDrawerToggle={setDrawerToggle} userID={props.userID}/>
      }
      <button
        className='border-2 border-white rounded-full bg-white w-20 h-auto shadow-lg transition-all duration-300 hover:w-30 hover:shadow-2xl'
        onClick={() => {
          setDrawerToggle(!drawerToggle);
        }}
      >
        <img
          alt='chat logo'
          src={chatBubble}
        />
      </button>
    </div>
  );
}


