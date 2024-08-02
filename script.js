function calculatePrice() {
    const designCost = document.getElementById('designLevel').value;
    const pageCount = parseInt(document.getElementById('pageCount').value) || 0;
    const editingCost = document.getElementById('photoEditing').value;
    const editingQuantity = editingCost > 0 ? 1 : 0; // 假设用户选择一个抠图级别就默认为1个
    const deliveryCost = document.getElementById('deliveryTime').value;
    
    let basePrice = designCost * pageCount;
    let totalPrice = basePrice + editingCost * editingQuantity + deliveryCost;
    
    // 设定最低价格
    if (totalPrice < 300) {
        totalPrice = 300;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `总报价: ${totalPrice}元`;

    const copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'inline-block';
}
