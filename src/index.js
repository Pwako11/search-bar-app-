const people= [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
];


const searchInput = document.querySelector('.input')
const clearButton = document.querySelector('.clear-result')

searchInput.addEventListener("keyup", (event)=>{
    event.preventDefault()
    clearList()
    //inside, we will need to achieve a few things:
    //1. declare and assign the value of the event target to a variable 

    let searchValue = event.target.value;

    searchQuery(searchValue)

});

function searchQuery(searchValue){
    //2. check: if input exists and if input is larger then 0
    if(searchValue && searchValue.trim().length > 0){
        //3. redefine value to exclude white space and change  input to all lower case
        value = searchValue.trim().toLowerCase();
        //4. return the result only if the value of teh search is included inthe person's name
        // we need to write code (a function for filtering through our data to include the search input value )
        // return only the results of the setList if the value of teh search is included in the persons name.  
        
        const filteredCharacters = people.filter(person => {
            return person.name.includes(value)
        });
        
        console.log("filteredCharacters", filteredCharacters)
        setList(filteredCharacters)
    
    }else{
        //.5 return nothing
        // input is invalid -- show an error message or show no result
        clearList()
    }


}

clearButton.addEventListener("click", ()=>{    
    //1. write a function that removes any previous results from the page
    //searchInput.value = "";
    clearList()
});

function setList(results){
    for(const person of results){
        //creating a li element for each result item 
        const resultItem = document.createElement('li')

        // adding a class to each item for the results
        resultItem.classList.add('result-item')

        //grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)
        
        //appedning the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list

        list.appendChild(resultItem)
    }

    if(results.length === 0){
        noResults()
    }
}

function clearList(){
    //looping through each child of the results list and remove each child 
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}


function noResults(){
    //create an element for the error; a list item ('li')
    const error = document.createElement('li')
    error.classList.add('error-message')

    //create text for our element
    const text= document.createTextNode('No results found. sorry')

    //append the textto our element 
    error.appendChild(text)

    //appending the error to our list element
    list.appendChild(error)
}