
module.exports = {
    
    // Grupo de funções que realizam a busca e retornam as informações a serem utilizadas na tabela  

    getAllElements() {
        
        const elements = require("./elements.json");
        
        return elements;
    },
    
    async getElementBy(elementNumber) {
        
        const elements = require("./elements.json");
        let index = Number(elementNumber)-1

        const elementInfo = elements[index]
        
        return elementInfo;
    },
}

