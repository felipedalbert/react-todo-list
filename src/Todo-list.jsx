function TodoList(){
    return (
        <div>
            <h1>Lista de tarefas</h1>
            <form>
                <input type="text" placeholder='Adicione uma tarefa'/>
                <button type='submit' className='add'>Add</button>
            </form>
            <div className='lista-tarefas'>
                <div className='item'>
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
                <div className='item check'>
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
        
    )
}

export default TodoList;