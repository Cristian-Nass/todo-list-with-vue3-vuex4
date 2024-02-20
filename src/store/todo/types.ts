interface Todo {
  title: string;
  description: string;
  createdAt: Date;
  done: boolean;
}
export interface TodoList {
  loading: boolean;
  todo: Todo[];
}
