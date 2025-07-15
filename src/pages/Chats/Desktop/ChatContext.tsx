import { createContext, useContext, useState, ReactNode } from 'react';

interface DesktopChatContextType {
  userLastChattedWith: string | null;
  userToChatWith: string | null;
  setUserLastChattedWith: (userId: string | null) => void;
  setUserToChatWith: (userId: string | null) => void;
  currentChat: string | null;
}

const DesktopChatContext = createContext<DesktopChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [userLastChattedWith, setUserLastChattedWith] = useState<string | null>(null);
  const [userToChatWith, setUserToChatWith] = useState<string | null>(null);




  const value = {
    userLastChattedWith,
    userToChatWith,
    currentChat:userToChatWith || userLastChattedWith,
    setUserLastChattedWith,
    setUserToChatWith,

  };

  return (
    <DesktopChatContext.Provider value={value}>
      {children}
    </DesktopChatContext.Provider>
  );
};

export const useDesktopChatContext = () => {
  const context = useContext(DesktopChatContext);
  if (context === undefined) {
    throw new Error('useDesktopChatContext must be used within a DesktopChatProvider');
  }
  return context;
};

