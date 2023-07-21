import './Todo-list.css'

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
                    <button className='del'>Deletar</button>
                </div>
                <div className='item check'>
                    <span>Tarefa de exemplo</span>
                    <button className='del'>Deletar</button>
                </div>
                
            </div>
            <button className='deleteAll'>Deletar Tudo</button>
        </div>
        
    )
}

export default TodoList;