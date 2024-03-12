import './App.css';
import { IoSettings } from 'react-icons/io5';
import ChatInput from './components/ChatInput';
import { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { BiBot } from 'react-icons/bi';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (messageText: string) => {
    setIsLoading(true);
    const newMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);

    const botMessageId = Date.now() + 1000000;
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: botMessageId, text: 'loading', sender: 'bot' },
    ]);

    setTimeout(
      () =>
        simulateBotResponse(
          'This is a simulated bot response for your message.',
          botMessageId
        ),
      2000
    );
  };

  const simulateBotResponse = (botMessage: string, botMessageId: number) => {
    let currentMessage = '';

    let totalDelay = 0;

    const chars = botMessage.split('');

    chars.forEach((char, index) => {
      const delay = 30;
      totalDelay += delay;

      setTimeout(() => {
        currentMessage += char;
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === botMessageId) {
              return { ...msg, text: currentMessage.trim() };
            }
            return msg;
          });
        });

        if (index === chars.length - 1) {
          setIsLoading(false);
        }
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
          <div className="menu p-8 w-80 min-h-full bg-base-200 text-[#394e6a] flex flex-col gap-6">
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
        className={`self-center ${
          messages.length === 0 ? 'justify-center' : 'justify-start'
        }  w-[50%] flex-grow flex flex-col gap-4`}
      >
        <div className="text-center mt-2">
          <div className="text-[3rem] font-semibold">Eureka</div>
          {messages.length === 0 && (
            <div className="text-xl mt-2">How can I help you today?</div>
          )}
        </div>

        <div
          className={`flex flex-col ${
            messages.length === 0 ? 'justify-center' : 'justify-start'
          } gap-4 overflow-auto max-h-[calc(100vh-18rem)] py-8 px-3`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
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
                {message.text === 'loading' ? (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#394e6a] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#394e6a] "></span>
                  </span>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
