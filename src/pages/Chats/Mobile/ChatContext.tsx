import { createContext, useContext, useState, ReactNode } from 'react';

interface MobileChatContextType {
    currentChat: string | null;
    setCurrentChat: (userId: string | null) => void;

}

const MobileChatContext = createContext<MobileChatContextType | undefined>(undefined);

interface MobileChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: MobileChatProviderProps) => {
  const [currentChat, setCurrentChat] = useState<string | null>(null);




  const value = {
    currentChat,
    setCurrentChat,

  };

  return (
    <MobileChatContext.Provider value={value}>
      {children}
    </MobileChatContext.Provider>
  );
};

    export const useMobileChatContext = () => {
  const context = useContext(MobileChatContext);
  if (context === undefined) {
    throw new Error('useMobileChatContext must be used within a MobileChatProvider');
  }
  return context;
};

