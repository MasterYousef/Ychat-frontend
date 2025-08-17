export interface chat {
  id: string;
  group: boolean;
  lastUpdate: Date;
  image: string;
  title: string;
  groupRoles?: string[];
  lastMessage: string;
  events: {
    id: string;
    type: "create" | "delete";
  }[];
}
