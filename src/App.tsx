import './App.css';
import { IoSettings } from 'react-icons/io5';
import ChatInput from './components/ChatInput';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { BiBot } from 'react-icons/bi';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setTimeout(
      () =>
        simulateBotResponse(
          'This is a simulated bot response for your message.'
        ),
      1500
    );
  };

  const simulateBotResponse = (botMessage: string) => {
    const words = botMessage.split(' ');
    let currentMessage = '';
    const botMessageId = Date.now();

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: botMessageId, text: '', sender: 'bot' },
    ]);

    let totalDelay = 0;

    words.forEach((word) => {
      const delay = 50 + word.length * 10;
      totalDelay += delay;

      setTimeout(() => {
        currentMessage += `${word} `;
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === botMessageId) {
              return { ...msg, text: currentMessage.trim() };
            }
            return msg;
          });
        });
      }, totalDelay);
    });
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
              <li>
                <a>Sidebar Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`self-center flex flex-col ${
          messages.length === 0 ? 'justify-center' : 'justify-start'
        } gap-4 flex-grow overflow-auto w-[50%] max-h-[calc(100vh-15rem)] overflow-y-auto`}
      >
        {messages.length === 0 ? (
          <div className="text-center mt-10">
            <div className="text-[2rem] font-semibold">Eureka</div>
            <div className="text-lg mt-2">How can I help you today?</div>
          </div>
        ) : (
          <div className="text-center mt-2">
            <div className="text-[1.75rem] font-semibold">Eureka</div>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id}>
            <div
              className={`flex gap-4 items-center py-2 px-3 rounded-[0.75rem] ${
                message.sender === 'user'
                  ? 'bg-gray-300 bg-opacity-40'
                  : 'bg-transparent'
              }`}
            >
              <div
                className={`p-2 rounded-[0.75rem] ${
                  message.sender === 'user' ? 'bg-[#872341]' : 'bg-[#346751]'
                }`}
              >
                {message.sender === 'user' ? (
                  <FaRegUser color="white" fontSize={'1.25rem'} />
                ) : (
                  <BiBot color="white" fontSize={'1.25rem'} />
                )}
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
