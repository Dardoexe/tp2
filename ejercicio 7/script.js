
        const listado = document.getElementById("listado")

        async function Agregar(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const res2 = await fetch("https://jsonplaceholder.typicode.com/todos")
            const tareas = await res2.json()
            const personas = await res.json()
            
            personas.forEach((persona) => {

                const item=document.createElement("li")
                item.textContent = `${persona.id} - ${persona.name} - ${persona.email} sitio web : ${persona.website}`
                listado.appendChild(item)

                const boton = document.createElement("button");
                item.appendChild(boton)
                boton.textContent = 'ver tareas'
                
                const boton2 =document.createElement("button");
                boton2.textContent= "cerrar"
                item.appendChild(boton2)

                
               

                boton.addEventListener("click", async () => {
                    tareas.forEach((tarea) => {
                        if (persona.id==tarea.userId){
                            const item2=document.createElement("li")
                            item2.textContent = `${tarea.title}`
                            item2.id=`${tarea.title}`
                            item.appendChild(item2)
                        if (tarea.completed){
                            item2.style.color="green"
                        }
                        else{
                            item2.style.color="red"
                        } 
                        }
                }
                        )
                       
                        boton2.addEventListener("click",async()=>{
                            tareas.forEach((tarea)=>{
                                const listadohijo = $ (`${tarea.title}`)
                                if (persona.id==tarea.userId){
                                    item.removeChild(listadohijo)
                                }
                            })
                        })
        }) 
        })
      }
        Agregar()
