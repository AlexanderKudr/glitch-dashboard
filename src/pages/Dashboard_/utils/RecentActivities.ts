import { nanoid } from "nanoid";

export interface RecentActivities {
  id: string;
  date: string;
  user: string;
  action: string;
}

const getDate = new Date();

export const activities: RecentActivities[] = [
  {
    id: nanoid(),
    date: getDate.toLocaleString(),
    user: "Alex_#6097",
    action: "Any command",
  },
];
