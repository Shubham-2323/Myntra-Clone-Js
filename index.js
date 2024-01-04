let bagItems = []
onload()

function onload() {
    let bagItemsStr = localStorage.getItem('bagItems',JSON)
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayitems()
    displayBagIcon()
}

function addToBag(itemId) {
    bagItems.push(itemId)
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon()
}

function displayBagIcon() {
    let displayBag = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        displayBag.style.visibility = 'visible'
        displayBag.innerText = bagItems.length
    }
    else {
        displayBag.style.visibility = 'hidden'
    }
}


function displayitems() {

    let itemContainerElement = document.querySelector('.items-container');
    if(!itemContainerElement){
        return
    }

    let display = ''
    items.forEach(item => {
        display += `
        <div class="item-container">
        <img class="image-container" src=${item.image} alt="itemimage">
        <div class="rating">
            ${item.rating.stars} | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage} %off)</span>
            </div>
            <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to bag</button>
        </div>`
    })

    itemContainerElement.innerHTML = display;

}



// let item = {

//     item_image: 'images/1.jpg',
//     rating: {
//         stars: '4.5⭐',
//         noOfReviews: '1.4k'
//     },
//     company_name: 'Zara',
//     item_name: 'Shoes',
//     current_price: 606,
//     original_price: 1290,
//     discount: 42,
// }




