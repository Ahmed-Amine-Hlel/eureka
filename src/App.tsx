import './App.css';
import { IoSettings } from 'react-icons/io5';
import ChatInput from './components/ChatInput';

function App() {
  const handleSendMessage = (message: string) => {
    console.log(message);
  };
  return (
    <div className="drawer bg-[#F1F2F6] h-screen flex flex-col gap-4">
      <div>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          <label
            htmlFor="my-drawer"
            className="btn btn-md btn-neutral btn-circle drawer-button"
          >
            <IoSettings fontSize={'1.75rem'} color="#F1F2F6" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-8 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-6">
            <div className="text-[2rem]">Navigation</div>
            <div className="text-[1rem] font-semibold">
              Choose an Enurka functionality
            </div>
            <ul>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="self-center flex justify-center items-center flex-grow overflow-auto bg-pink-300 text-white w-[80%]">
        chat
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
