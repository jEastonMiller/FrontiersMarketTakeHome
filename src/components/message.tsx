import {useEffect, useState} from 'react';
import chatBubble from '../assets/chatBubble.png';
import userIcon from '../assets/usericon.png';
/**
 * Renders the main App component.
 * @return {JSX.Element}
 */
interface MessageProps {
  messageRole: string,
}
export default function Message(props: MessageProps): JSX.Element {
  const [role, setRole] = useState('');

  useEffect((): void => {
    setRole(props.messageRole);
  }, [props.messageRole]);
  return (
    <div className='relative'>

      {role === 'user' && <div
        className='flex flex-col px-2 py-1'
      >
        <div
          className='self-end rounded-full border-2 border-blue-200'
        >
          <img
            className='w-8 h-auto p-1'
            src={userIcon}
          />
        </div>
        <h1
          className="self-end w-3/4 text-left py-1 px-2 my-2 border-2 border-blue-200 rounded-lg"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nec ultrices dui sapien eget mi. Odio pellentesque diam volutpat commodo. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. At erat pellentesque adipiscing commodo elit. Imperdiet sed euismod nisi porta lorem. Aenean et tortor at risus viverra adipiscing at in. Nisl nunc mi ipsum faucibus. Porttitor massa id neque aliquam vestibulum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Morbi blandit cursus risus at ultrices mi. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Odio aenean sed adipiscing diam. Arcu non odio euismod lacinia at quis. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Ut sem viverra aliquet eget sit amet tellus.

        Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Erat pellentesque adipiscing commodo elit at imperdiet dui. Dui id ornare arcu odio ut. Rhoncus est pellentesque elit ullamcorper dignissim. Sed faucibus turpis in eu mi bibendum neque. Ut sem viverra aliquet eget. Suscipit adipiscing bibendum est ultricies. In eu mi bibendum neque egestas congue. Senectus et netus et malesuada fames ac turpis egestas maecenas. Sodales neque sodales ut etiam. Dolor magna eget est lorem ipsum dolor.</h1>
      </div>}
      {role === 'assistant' && <div
        className='flex flex-col px-2 py-1'
      >
        <div
          className='self-start rounded-full border-2 border-green-300'
        >
          <img
            className='w-8 h-auto p-1'
            src={chatBubble}
          />
        </div>
        <h1
          className="self-start w-3/4 text-left py-1 px-2 my-2 border-2 border-green-300 rounded-lg"
        >chat message</h1>
      </div>}

    </div>
  );
}
