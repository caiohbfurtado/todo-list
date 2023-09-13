import './global.css'
import { PlusCircle } from 'lucide-react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'

import styles from './App.module.css'
import { Badge } from './components/Badge'
import { Task } from './components/Task'
import { ChangeEvent, FormEvent, useState } from 'react'

type Task = {
  id: number
  title: string
  done: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem harum molestias ipsum asperiores distinctio? Incidunt inventore, asperiores exercitationem vel id veniam amet repellendus fugiat, recusandae porro pariatur cum. Veritatis, alias?',
      done: false,
    },
  ])
  const [newTask, setNewTask] = useState('')

  const tasksDone = tasks.filter((task) => task.done).length
  const isNewTaskEmpty = newTask.trim().length === 0

  function handleCheckTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : { ...task },
      ),
    )
  }

  function handleDeleteTask(id: number) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault()

    if (isNewTaskEmpty) {
      return
    }

    setTasks((prevState) => [
      ...prevState,
      { id: prevState.length + 1, title: newTask, done: false },
    ])
    setNewTask('')
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleSubmitNewTask} className={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <Button
            type="submit"
            title="Criar"
            icon={PlusCircle}
            disabled={isNewTaskEmpty}
          />
        </form>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.createdTasks}>
              <span>Tarefas criadas</span>
              <Badge value={tasks.length.toString()} />
            </div>

            <div className={styles.donedTasks}>
              <span>Concluídas</span>
              <Badge value={`${tasksDone} de ${tasks.length}`} />
            </div>
          </div>

          <div className={styles.tasks}>
            {tasks
              .sort(function (item) {
                return item.done ? 1 : -1
              })
              .map(({ id, title, done }) => (
                <Task
                  title={title}
                  key={id}
                  done={done}
                  onChange={() => handleCheckTask(id)}
                  onDelete={() => handleDeleteTask(id)}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}
