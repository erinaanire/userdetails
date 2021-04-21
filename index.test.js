
//Check if content editable is set if class name is present as content-editable
let eventParam = {
    target : {
        parentElement : {
            parentElement : {
                children : [{
                    className : 'content-editable',
                }]
            }
        }
    }
};
console.log("Test case 1", editButtonToggle(eventParam))


//check if content editable is not set if class name is not present as content-editable

eventParam = {
    target : {
        parentElement : {
            parentElement : {
                children : [{
                    // className : 'content-editable',
                }]
            }
        }
    }
};
console.log("Test case 2", editButtonToggle(eventParam))
