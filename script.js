function calculateQuote() {
    let designLevel = document.getElementById('designLevel').value;
    let numOfPages = parseInt(document.getElementById('numOfPages').value) || 0;
    let imageEdit = document.getElementById('imageEdit').value;
    let numOfEdits = parseInt(document.getElementById('numOfEdits').value) || 0;
    let deadline = parseInt(document.getElementById('deadline').value) || 0;

    let basePrice = 300; // 起步价
    let designCost = 0;
    let imageCost = 0;

    // 设计费用
    switch(designLevel) {
        case "simple": designCost = 10 * numOfPages; break;
        case "general": designCost = 15 * numOfPages; break;
        case "standard": designCost = 20 * numOfPages; break;
        case "fine": designCost = 35 * numOfPages; break;
        case "premium": designCost = 50 * numOfPages; break;
        case "chief": designCost = 150 * numOfPages; break;
    }

    // 抠图/P图费用
    if (imageEdit !== "0") {
        let editPrice = 0;
        switch(imageEdit) {
            case "easy": editPrice = 5; break;
            case "normal": editPrice = 10; break;
            case "general": editPrice = 20; break;
            case "fine": editPrice = 30; break;
        }
