const productsContainer = document.querySelector('#products').querySelector('.container')

function createProduct(image, name, price){
    const product = document.createElement('div')
    product.classList.add('product')

    const productImage = document.createElement('div')
    productImage.classList.add('product_image')
    const imageTag = document.createElement('img')
    imageTag.src = image
    productImage.appendChild(imageTag)

    const productName = document.createElement('div')
    productName.classList.add('product_name')
    productName.textContent = name

    const productPrice = document.createElement('div')
    productPrice.classList.add('product_price')
    productPrice.textContent = price

    product.appendChild(productImage)
    product.appendChild(productName)
    product.appendChild(productPrice)

    return product
}

function createProductsCategory (title, products) {
    const category = document.createElement('div')
    category.classList.add('products_category')

    const categoryTitle = document.createElement('h3')
    categoryTitle.classList.add('title')
    categoryTitle.textContent = title

    const productsWrapper = document.createElement('div')
    productsWrapper.id = 'products_container'
    productsWrapper.classList.add('hide_scrollbar')

    for(let {image, name, price} of products){
        const productElement = createProduct(image, name, price)
        productsWrapper.appendChild(productElement)
    }

    category.appendChild(categoryTitle)
    category.appendChild(productsWrapper)

    return category
}

const products = [
    {
        image: 'this is image',
        name: 'this is name',
        price: 450000
    },
    {
        image: 'this is image',
        name: 'this is name',
        price: 450000
    },
    {
        image: 'this is image',
        name: 'this is name',
        price: 450000
    },
    {
        image: 'this is image',
        name: 'this is name',
        price: 450000
    }
]

const category = createProductsCategory('fashion', products)
console.log(category)