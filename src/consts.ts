import { ITodoItem } from "./app/services/todo.service";

export const mockTodos: ITodoItem[] = [
    {
        title: 'Learn angular',
        done: false,
        createdAt: 1645187961294
    },
    {
        title: 'Read about Svelte',
        done: false,
        createdAt: 1645187997865
    },
    {
        title: 'Create blog on Next.js',
        done: true,
        createdAt: 1644987961294
    }
]