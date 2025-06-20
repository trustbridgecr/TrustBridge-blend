export interface Message {
  id: string;
  content: string;
  sender: "user" | "other";
  timestamp: string;
  status?: "sending" | "sent" | "delivered" | "read" | "error";
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: number;
  messages: Message[];
  status?: "online" | "offline" | "away";
  lastSeen?: string;
}

export interface ChatState {
  isLoading: boolean;
  error: string | null;
  chats: Chat[];
  activeChat: Chat | null;
}

export type ChatMessage = {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: number;
  status?: "sent" | "delivered" | "read";
};

export type ChatWithMessages = {
  id: string;
  participants: string[];
  lastMessage: string | null;
  lastMessageTime: number | null;
  createdAt: number;
  messages: ChatMessage[];
};
