import { useState, useEffect } from 'react';
import './Todo-list.css'
import todoIllustration from './assets/todoIllustration.svg';

function TodoList(){

    const[lista, setLista] = useState([])
    const [novoItem, setNovoItem] = useState("")

    function addItem(form){
        form.preventDefault()

        if(!novoItem) return

        setLista((prevState) => [...prevState, {text: novoItem, isCompleted: false}])
        setNovoItem("")
        document.getElementById('input-entrada').focus()
    }

    function clicked(index){
        const listaAux = [...lista]
        listaAux[index].isCompleted = listaAux[index].isCompleted ? false : true
        setLista(listaAux)
    }

    function deleted(index){
        const listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)
    }

    return (
        <div>
            <h1>Lista de tarefas</h1>

            <form onSubmit={addItem}>
                <input
                    id="input-entrada" 
                    type="text"
                    value={novoItem} 
                    onChange={(e) => {setNovoItem(e.target.value)}}
                    placeholder='Adicione uma tarefa'
                />
                <button type='submit' className='add'>Add</button>
            </form>

            <div className='lista-tarefas' style={{textAlign: 'center'}}>
                {
                    lista.length < 1 ? <img src={todoIllustration} style={{marginTop: "-65px"}} />
                    : lista.map((item, index) =>(
                        <div className={item.isCompleted ? 'item check' : 'item'} key={index}>
                            <span onClick={()=>{clicked(index)}}>{item.text}</span>
                            <button onClick={()=>{deleted(index)}} className='del'>Deletar</button>
                        </div>   
                    ))
                }
            </div>

            {lista.length > 0 && <button onClick={()=>{setLista([])}} className='deleteAll' >Deletar Tudo</button>}
        </div>
        
    )
}

export default TodoList;