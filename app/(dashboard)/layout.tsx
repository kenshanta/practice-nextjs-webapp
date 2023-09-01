import NewTodoForm from '@/components/NewTodoForm'

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
