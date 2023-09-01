import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(2000), 2000))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}
const TodosPage = async () => {
  const todos = await getData()
  console.log(todos, '[second] tria;')
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
