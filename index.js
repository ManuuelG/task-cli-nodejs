#!/usr/bin/env node

const args = process.argv
const command = args[2]


const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data.json'));




function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		case '--list':
				getTasks()
				break

		case '--show':
				getTaskById(args[3])
				break

		
		
		// AQUÍ TU CÓDIGO PARA PROCESAR OTROS COMANDOS

		default:
			console.log(args)
			console.error('comando no definido')
	}
}

main()

function showHelp() {
	console.log('Uso: task <comando>')
	console.log('')
	console.log('Comandos disponibles:')
	console.log('  new <task>: Crear una nueva tarea')
	console.log('  list: Listar todas las tareas')
	console.log('  show <taskId>: Obtener una tarea por su ID')
	console.log('  update <taskId> <taskBody>: Actualizar una tarea')
	console.log('  delete <taskId>: Eliminar una tarea')
	console.log('  clear: Eliminar todas las tareas')
}

function showVersion() {
	console.log('task v1.0.0')
}

function getTasks() {
	
	

	for (i = 0; i < data.tasks.length; i++) {

		const event = new Date(data.tasks[i].id)
		console.log(event.toUTCString() + ":", data.tasks[i].body);
	  } 
  }

function getTaskById(id) {
	

	const task = data.tasks.find((task) => task.id === +id)

	if (task) {
		console.log(`ID: ${task.id}`);
		console.log(`Body: ${task.body}`);
	  } else {
		console.log('El ID que has introducido no es válido');
	  }

}

function saveData(newData) {
	// AQUI TU CÓDIGO
}

function createTask(body) {
		
}

function updateTask(id, body) {
	// AQUI TU CÓDIGO
}

function deleteTask(id) {
	//AQUÍ TU CÓDIGO
}

function clearTasks() {
	//AQUÍ TU CÓDIGO
}
