import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import closeIcon from '../assets/closeicon.png';
import Message from './message';
/**
 * Renders the main App component.
 * @return {JSX.Element}
 */
interface ChatWindowProps {
  setDrawerToggle: Dispatch<SetStateAction<boolean>>
  userID: string
}
type ChatLogType = {role: string, message: string}[][]
type QueryInfoType = {userID: string, messageObj: {role: string, content: string}}
export default function ChatWindow(props: ChatWindowProps): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [chatLog, setChatLog] = useState<ChatLogType>([]);
  const onChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    console.log('query: ', query);
    setQuery(e.target.value);
  };
  useEffect(() => {
    console.log(chatLog);
  }, [chatLog]);
  return (
    <div className='absolute bottom-0 right-0 z-20 w- bg-white p-4 drop-shadow-xl rounded-2xl'>
      <button
        className='absolute top-4 right-4 w-4 h-auto border-2 border-gray-200 rounded-full hover:border-gray-500'
        onClick={() => props.setDrawerToggle(false)}
      >
        <img
          src={closeIcon}
          alt='close icon'
        />
      </button>
      <section
        className='w-auto h-72 bg-white flex flex-col mx-3 my-6 text-sm overflow-auto rounded-md drop-shadow-md drop-shadow-gray-500'
      >
        {/* {chatLog[0] && chatLog.map((currMessage) => {
          return <Message messageRole={currMessage.role} />
        })} */}
        <Message messageRole="user"/>
      </section>
      <section
        className="flex flex-row justify-start w-1/2 self-start items-center"
      >
        <textarea
          placeholder="message"
          className="mx-2 border-2 border-gray-200 px-2 rounded-md"
          onChange={onChange}
          value={query}
        >
        </textarea>
        <button
          className="h-10 border-2 border-gray-200 px-4 hover:border-gray-400 rounded-md"
          onClick={() => {
            const queryInfo: QueryInfoType = {
              userID: props.userID,
              messageObj: {
                role: 'user',
                content: query,
              },
            };
            console.log('hello: ', queryInfo);
            try {
              const submitQuery = async function() {
                console.log('hello2');
                const response = await fetch('https://us-central1-frontiersmarket-takehome.cloudfunctions.net/app/chat/query', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(queryInfo),
                });
                const chatLogRes = await response.json();
                console.log('chatLogRes: ', chatLogRes);
                setChatLog(chatLogRes);
              };
              submitQuery();
            } catch (err) {
              console.log(err);
            }
          }}
        >send</button>
      </section>
    </div>
  );
}


