export interface ITask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string; // ISO date format (YYYY-MM-DD)
}

type ITaskCreateDtoExclude = 'id' | 'userId';

export interface ITaskCreateDto extends Omit<ITask, ITaskCreateDtoExclude> {}
