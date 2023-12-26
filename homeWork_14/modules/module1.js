async function getTextOfNodes(nodes) {
    let textArray = [];
        for (let node of nodes) { 
            let nodeText = await node.getText(); 
            textArray.push(nodeText.replace(/\$|(\.\d*)/g, '')); 
        };
    return textArray.toString();
}

async function getTextOfNodesWithSorting(nodes) {
    let textArray = [];
        for (let node of nodes) { 
            let nodeText = await node.getText();
            let nodeTextNumber = parseFloat(nodeText.replace(/\$|(\.\d*)/g, '')); 
            textArray.push(nodeTextNumber);
        };
        textArray.sort((a,b) => a - b);
    return textArray.toString();
}

module.exports = { getTextOfNodes, getTextOfNodesWithSorting };
