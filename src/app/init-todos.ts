export class Init{
	load(){
		
		if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined){
			console.log('no todos found....creating...');
			var todos =[
				{
					text:'pickup kids at school'	
				},
				{
					text: 'learn angular'
				},
				{
					text: 'make dinner'
				}
			];
			localStorage.setItem('todos', JSON.stringify(todos));
			return

		} else{
			console.log('found Todos')
		}
	}
}