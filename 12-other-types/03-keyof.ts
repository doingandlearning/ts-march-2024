export type APIResponse = {
  user: {
    userId?: string;
    friendList?: {
      count: number;
      favourite: { firstName: string; lastName: string; birthday: string };
      friends: {
        firstName: string;
        lastName: string;
        birthday: string;
      }[];
    };
  };
};

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse["user"];

type FriendList = {
  [Key in UserKeys]-?: NonNullable<APIResponse["user"][Key]>;
};
