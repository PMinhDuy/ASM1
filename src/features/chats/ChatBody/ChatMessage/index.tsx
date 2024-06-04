interface ChatMessageProps {
  message: string;
  isReceive?: boolean;
}

function ChatMessage({ message, isReceive = false }: ChatMessageProps) {
  return (
    <div className={`flex ${isReceive && 'flex-row-reverse'}`}>
      <div
        className={`bg-primary-green-color text-white px-4 py-3 rounded-lg w-fit max-w-[280px] break-words ${
          isReceive && 'bg-gray-300 float-right text-[#000] my-2 ml-12'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
