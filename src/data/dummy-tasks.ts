import { ITask } from '../app/tasks/task/task.model';

export const DUMMY_TASKS: ITask[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic & advanced features of Angular & how to apply them.',
    dueDate: '2026-02-28',
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Build Angular Projects',
    summary: 'Create 2–3 real-world Angular projects to strengthen practical knowledge.',
    dueDate: '2026-03-15',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Learn TypeScript Deeply',
    summary:
      'Understand advanced TypeScript concepts like generics, decorators, and utility types.',
    dueDate: '2026-03-05',
  },
  {
    id: 't4',
    userId: 'u3',
    title: 'Prepare for Frontend Interviews',
    summary: 'Practice Angular, JavaScript, and system design interview questions.',
    dueDate: '2026-03-25',
  },
  {
    id: 't5',
    userId: 'u4',
    title: 'Optimize Angular Performance',
    summary:
      'Learn change detection strategies, lazy loading, and performance optimization techniques.',
    dueDate: '2026-04-05',
  },
];
