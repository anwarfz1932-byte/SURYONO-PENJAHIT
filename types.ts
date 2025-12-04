export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface ServiceItem {
    name: string;
}