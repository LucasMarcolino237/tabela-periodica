// import axios from "axios";


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

module.exports = {
    
    getAllElements() {
        const elements = require("./elements.json");
        // const elements = res.data;

        return elements;
    },
    
    // async getElementBy(searchType, elementName) {
    //     searchType = searchType.capitalize();

    //     // const validSearchType = [
    //     //     'Number',
    //     //     'Name',
    //     //     'Symbol',
    //     //     'Bonding',
    //     //     'Group',
    //     //     'State',
    //     // ]

    //     const res = await axios.get(`https://periodic-table-api.herokuapp.com/atomic${searchType}/${elementName}`);
    //     const elementInfo = res.data;

    //     return elementInfo;
    // },
}

