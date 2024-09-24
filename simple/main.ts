import { Hono } from 'hono'

const app = new Hono()
app.get('/todos/:todo', async (c) => {

    const todo = c.req.param('todo');
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo}`);
    if (!response.ok) {
        return c.text(response.statusText, 404);
    }
    const data = await response.json();
    return c.json(data);
});

export default app