import React, {useState, Dispatch, SetStateAction} from 'react';
import logo from '../assets/logo.svg';
import login from '../assets/login.png';
/**
 * Renders the main App component.
 * @return {JSX.Element}
 */
interface AuthModalProps {
  handleAuth: (bool: boolean, mode: string) => void;
  authMode: string;
  setUserID: Dispatch<SetStateAction<string>>
}
export default function AuthModal(props: AuthModalProps): JSX.Element {
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState(props.authMode);
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const onChangePass: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setPassword(e.target.value);
  };
  const onChangeUser: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div
      className='fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center text-primary bg-white bg-opacity-60'
      onClick={() => props.handleAuth(false, 'login')}
    >
      <div
        className=' flex items-center justify-center bg-white h-min border-2 rounded-xl px-5 py-10 shadow-2xl'
        onClick={stopPropagation}
      >
        <section
          className='flex flex-col justify-center items-center px-20 m-5'
        >
          <div>
            <img
              alt='logo'
              src={logo}
              className='my-2'
            />
            <div
              className='flex flex-col'
            >
              <h1>Welcome Back</h1>
              {mode === 'login' && <div
                className='grid grid-cols-2 items-center'
              >
                <h3 className='col-span-1'>Dont have an account?
                  <span
                    className='flex flex-row items-center col-span-1'
                  >
                    <a
                      className='font-bold hover:cursor-pointer'
                      onClick={() => setMode('register')}
                    >Register now
                      <svg
                        onClick={() => setMode('register')}
                        className='hover:cursor-pointer'
                        stroke="currentColor" fill="#1D2939" strokeWidth="0" viewBox="0 0 16 16" height="12" width="12" xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z">
                        </path>
                      </svg>
                    </a>
                  </span>
                </h3>
              </div>}
              {mode === 'register' && <div
                className='grid grid-cols-2 items-center'
              >
                <h3 className='col-span-1'>Have an account?
                  <span
                    className='flex flex-row items-center col-span-1'
                  >
                    <a
                      className='font-bold hover:cursor-pointer'
                      onClick={() => setMode('login')}
                    >Login now
                      <svg
                        onClick={() => setMode('login')}
                        className='hover:cursor-pointer'
                        stroke="currentColor" fill="#1D2939" strokeWidth="0" viewBox="0 0 16 16" height="12" width="12" xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z">
                        </path>
                      </svg>
                    </a>
                  </span>
                </h3>
              </div>}
            </div>
            <div
              className='flex flex-col justify-center align-center'
            >
              <input
                placeholder='username'
                className='my-2 p-2 border-2 border-gray-300 rounded-md'
                value={email}
                onChange={onChangeUser}
              >
              </input>
              <div
                className='relative'
              >
                {passwordHidden && <input
                  placeholder='password'
                  className='my-2 w-full p-2 border-2 border-gray-300 rounded-md'
                  onChange={onChangePass}
                  value={password}
                  type='password'
                >
                </input>}
                {!passwordHidden && <input
                  placeholder='password'
                  onChange={onChangePass}
                  value={password}
                  className='my-2 w-full p-2 border-2 border-gray-300 rounded-md'
                >
                </input>}
                <button
                  onClick={() => {
                    setPasswordHidden(!passwordHidden);
                  }}
                  className='absolute top-1/2 right-2 transform -translate-y-1/2'
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                    {passwordHidden && <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>}
                    {!passwordHidden && <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path>}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {mode === 'login' && <div
            className='w-full flex flex-col justify-between items-center my-5'
          >
            <button
              className='w-3/4 bg-secondary rounded my-1 py-2 font-archia font-white'
              onClick={() => {
                try {
                  const loginUser = async function() {
                    const userData: {email: string, password: string} = {
                      email: email,
                      password: password,
                    };
                    console.log('userData: ', userData);
                    const response = await fetch('https://us-central1-frontiersmarket-takehome.cloudfunctions.net/app/auth/login', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(userData),
                    });
                    const userIDRes = await response.json();
                    console.log(userIDRes);
                    props.setUserID(userIDRes);
                  };
                  loginUser();
                } catch (err) {
                  console.log(err);
                }
              }}
            >Log in</button>
            <div
              className='flex flex-row items-center gap-2 w-3/4 rounded'
            >
              <hr className="w-full border-2 border-gray-300" />
              <h2 className='font-archia'>OR</h2>
              <hr className="w-full border-2 border-gray-300" />
            </div>
            <button
              className='w-3/4 border border-gray rounded my-1 py-2 font-archia'
            >Google Auth</button>
            <button
              className='w-3/4 border border-gray rounded my-1 py-2 font-archia'
            >Facebook Auth</button>
          </div>}
          {mode === 'register' && <div
            className='w-full flex flex-col justify-between items-center my-5'
          >
            <button
              className='w-3/4 bg-secondary rounded my-1 py-2 font-archia font-white'
              onClick={() => {
                const userData: {email: string, password: string} = {
                  email: email,
                  password: password,
                };

                try {
                  const registerUser = async function() {
                    const response = await fetch('https://us-central1-frontiersmarket-takehome.cloudfunctions.net/app/auth/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(userData),
                    });
                    const successfulReq = await response.json();
                    props.setUserID(successfulReq.userObj.id);
                    console.log(successfulReq);
                  };
                  registerUser();
                } catch (err) {
                  console.log(err);
                }
              }}
            >Register</button>
            <div
              className='flex flex-row items-center gap-2 w-3/4 rounded'
            >
              <hr className="w-full border-2 border-gray-300" />
              <h2 className='font-archia'>OR</h2>
              <hr className="w-full border-2 border-gray-300" />
            </div>
            <button
              className='w-3/4 border border-gray rounded my-1 py-2 font-archia'
            >Google Auth</button>
            <button
              className='w-3/4 border border-gray rounded my-1 py-2 font-archia'
            >Facebook Auth</button>
          </div>}

          <section
            className='flex flex-col justify-end items-center py-4'
          >
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <p>Copyright © Frontiers Market 2023. All Rights Reserved.</p>
          </section>
        </section>
        <section
          className='relative w-1/4 bg-cover bg-center'
        >
          <div
            className='absolute inset-0 z-0 overflow-hidden h-96 w-auto object-top'
          >
            <img
              alt='login photo'
              src={login}
              className='w-full h-full object-cover object-top'
            />
          </div>
          <div
            className='relative z-10 flex flex-row justify-center items-center px-4 py-8 text-white font-archia '
          >
            <p>Verified Seller on Frontiers Market
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#45AF57" viewBox="0 0 16 16">
                <circle cx="50%" cy="50%" r="25%" fill="#FFFFFF"></circle>
                <path d="M8 0C9.125 0 10.125 0.65625 10.625 1.625C11.6562 1.28125 12.8438 1.53125 13.6562 2.34375C14.4688 3.15625 14.7188 4.34375 14.375 5.375C15.3438 5.875 16 6.875 16 8C16 9.15625 15.3438 10.1562 14.375 10.6562C14.7188 11.6875 14.4688 12.8438 13.6562 13.6562C12.8438 14.4688 11.6562 14.7188 10.625 14.4062C10.125 15.375 9.125 16 8 16C6.84375 16 5.84375 15.375 5.34375 14.4062C4.3125 14.7188 3.15625 14.4688 2.34375 13.6562C1.53125 12.8438 1.28125 11.6875 1.59375 10.6562C0.625 10.1562 0 9.15625 0 8C0 6.875 0.625 5.875 1.59375 5.375C1.28125 4.34375 1.53125 3.15625 2.34375 2.34375C3.15625 1.53125 4.3125 1.28125 5.34375 1.625C5.84375 0.65625 6.84375 0 8 0ZM11.5312 6.53125C11.8125 6.25 11.8125 5.78125 11.5312 5.5C11.2188 5.1875 10.75 5.1875 10.4688 5.5L7 8.96875L5.53125 7.5C5.21875 7.1875 4.75 7.1875 4.46875 7.5C4.15625 7.78125 4.15625 8.25 4.46875 8.53125L6.46875 10.5312C6.75 10.8438 7.21875 10.8438 7.53125 10.5312L11.5312 6.53125Z">
                </path>
              </svg>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


