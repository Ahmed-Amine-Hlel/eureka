import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center my-8">
      <form onSubmit={handleSubmit} className="w-[60%]">
        <div className="flex flex-grow items-center border-2 border-[#222831] border-opacity-70 bg-transparent rounded-[1rem]">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-5 text-[1rem] bg-transparent focus:outline-none font-semibold placeholder:font-medium placeholder:text-[0.85rem]"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="btn bg-transparent hover:bg-transparent active:bg-transparent border-none shadow-none focus:outline-none px-4 py-3"
          >
            <BsSend size="1.5em" color="#222831" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
