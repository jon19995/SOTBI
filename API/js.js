fetch('http://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		const RAND_1 =  Math.floor(Math.random() * (9)) + 1;
		const RAND_2 =  Math.floor(Math.random() * (9)) + 1;

		const arrayWithoutRandomElements = json.filter((element, i) => {
			return element.id !== RAND_1 && i !== RAND_2
		})
		const resultArray = [];
		arrayWithoutRandomElements.forEach(element => {
			resultArray.push(`${element.name} ${element.username}`)
		});
		console.log(resultArray);
		})
	.catch(()=>{
		console.log('ERROR ! ! !');
});
