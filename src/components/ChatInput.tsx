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

    const textarea = event.currentTarget.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'inherit';
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex justify-center items-center mb-12 mt-8">
      <form onSubmit={handleSubmit} className="w-[50%]">
        <div className="flex flex-grow items-center border-[0.0625rem] border-[#222831] border-opacity-70 bg-transparent rounded-[1rem]">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={handleInput}
            className="w-full px-5 py-2 text-[1rem] bg-transparent focus:outline-none font-semibold placeholder:text-[0.9rem] resize-none overflow-hidden"
            placeholder="Type your message here..."
            rows={1}
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
