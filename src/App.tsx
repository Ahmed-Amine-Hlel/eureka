import './App.css';
import { IoSettings } from 'react-icons/io5';
import ChatInput from './components/ChatInput';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

interface Message {
  id: number;
  text: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: messages.length,
      text: messageText,
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <div className="drawer bg-[#F1F2F6] h-screen flex flex-col gap-4">
      <div>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          <label
            htmlFor="my-drawer"
            className="btn btn-sm btn-neutral btn-circle drawer-button"
          >
            <IoSettings fontSize={'1.25rem'} color="#F1F2F6" />
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
      <div className="self-center flex flex-col gap-4 flex-grow overflow-auto w-[60%] max-h-[calc(100vh-15rem)] overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="">
            <div className="flex gap-4 items-center bg-gray-400 bg-opacity-15 p-3 rounded-[1rem]">
              <div className="p-2 bg-[#872341] rounded-[0.75rem]">
                <FaRegUser color="white" fontSize={'1.5rem'} />
              </div>
              <div className="text-[1rem] font-semibold break-all">
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
