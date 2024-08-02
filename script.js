function calculateQuote() {
    var designLevel = document.getElementById('designLevel').value;
    var pages = document.getElementById('pages').value;
    var imageEdit = document.getElementById('imageEdit').value;
    var deadline = document.getElementById('deadline').value;

    // 基本设计费用
    var baseCost = designLevel * pages;

    // 抠图/P图费用
    if (imageEdit !== '0') {
        baseCost += imageEdit;
    }

    // 附加时间费用
    baseCost += parseInt(deadline);

    // 确保总价不低于300元
    var totalPrice = Math.max(baseCost, 300);

    // 显示总价
    document.getElementById('totalPrice').textContent = totalPrice + ' 元';
}
