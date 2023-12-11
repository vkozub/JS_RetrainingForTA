module.exports = function greeting(name) {
    let dateNow = new Date();
    let timeInHours = dateNow.getHours();
    let greeting;
    if (timeInHours < 5 && timeInHours >= 23) { greeting = 'Good night';
    } else if (timeInHours >= 5 && timeInHours < 11) { greeting = 'Good morning'; 
    } else if (timeInHours >= 11 && timeInHours < 17) { greeting = 'Good day'; 
    } else { greeting = 'Good evening'; };
    return greeting + ', ' + name;
};
