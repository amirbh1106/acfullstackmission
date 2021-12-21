CREATE DATABASE todosbase ON

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    data jsonb
)