function calculatePrice() {
    let designCost = parseInt(document.getElementById('designLevel').value);
    let pageCount = parseInt(document.getElementById('pageCount').value) || 0;
    let photoEditingCost = parseInt(document.getElementById('photoEditing').value) || 0;
    let deliveryCost = parseInt(document.getElementById('deliveryTime').value) || 0;

    let totalCost = (designCost * pageCount) + photoEditingCost + deliveryCost;
    if (totalCost < 300) {
        totalCost = 300; // 价格至少要300元
    }

    document.getElementById('result').textContent = `总报价: ${totalCost}元`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
}

function copyPrice() {
    let price = document.getElementById('result').textContent.trim().split(': ')[1];
    navigator.clipboard.writeText(price).then(() => {
        alert('价格已复制到剪贴板');
    }).catch(err => {
        console.error('无法复制价格', err);
    });
}
