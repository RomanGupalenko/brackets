const createNewBracketsConfig = (config) => {
    let NBC = [];
    for(let i = 0; i < config.length; i++) 
    {
		NBC[config[i][0]] = config[i][1];
    }
    return NBC;
};

module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let brackets = str.split(""),
	    newBracketsConfig = createNewBracketsConfig(bracketsConfig),
        bracketsQueue = [];
    for(let i = 0; i < brackets.length; i++) 
    {
        if(brackets[i] === bracketsQueue[bracketsQueue.length - 1]) 
        {
		    bracketsQueue.pop();
        } 
        else 
        {
            if(newBracketsConfig[brackets[i]] !== undefined) 
                bracketsQueue.push(newBracketsConfig[brackets[i]]); 
            else return false;
		}
    }
    return bracketsQueue.length === 0;
}
