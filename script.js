function calculatePrice() {
    let designCost = parseInt(document.getElementById('designLevel').value, 10) || 0;
    let pageCount = parseInt(document.getElementById('pageCount').value, 10) || 0;
    let photoEditingCost = parseInt(document.getElementById('photoEditing').value, 10) || 0;
    let deliveryCost = parseInt(document.getElementById('deliveryTime').value, 10) || 0;

    // 验证 pageCount 是否为有效数字
    if (!pageCount || isNaN(pageCount = parseInt(pageCount, 10))) {
        alert('请先填写页数，且只能填数字');
        return; // 阻止进一步执行
    }

    
    let totalCost = (designCost * pageCount) + (pageCount * photoEditingCost) + deliveryCost;
    if (totalCost < 300) {
        totalCost = 300;
    }

    let minPrice = totalCost * 0.7;
    let maxPrice = totalCost * 1.5;

        if (minPrice < 300) {
        minPrice = 300;
    }

    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = `总报价: ${totalCost}元`;
        resultElement.style.display = 'block';
    }

    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.style.display = 'block';
    }

    const arrangeElement = document.getElementById('arrange');
    if (arrangeElement) {
        arrangeElement.textContent = `参考价格范围: ${minPrice}~${maxPrice}元`;
        arrangeElement.style.display = 'block';
    }
}

function copyPrice() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        let price = resultElement.textContent.trim().split(': ')[1];
        if (price) {
            navigator.clipboard.writeText(price).then(() => {
                alert('价格已复制到剪贴板');
            }).catch(err => {
                console.error('无法复制价格', err);
            });
        } else {
            alert('无法解析价格');
        }
    } else {
        alert('未找到价格元素');
    }
}
