import './App.css';
import {useState} from 'react';
import Static from './components/static.tsx';
import Chat from './components/chat.tsx';
import AuthModal from './components/authmodal.tsx';

/**
 * Renders the main App component.
 * @return {JSX.Element} JSX element representing the main App component.
 */
function App(): JSX.Element {
  const [authToggle, setAuthToggle] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<string>('login');
  const [userID, setUserID] = useState<string>('');

  const handleAuth = (bool: boolean, mode: string): void => {
    setAuthToggle(bool);
    setAuthMode(mode);
  };

  return (
    <div className="min-h-screen relative">
      <Static handleAuth={handleAuth} />
      {authToggle && <AuthModal handleAuth={handleAuth} authMode={authMode} setUserID={setUserID}/>}
      <Chat userID={userID} />
    </div>
  );
}

export default App;
