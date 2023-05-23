const categoriesListEl = document.querySelector('#categories')
const categoryELs = document.querySelectorAll('.item')

function showNumberOfCategories(el) {
    console.log(`Number of categories: ${el.children.length}`)
    

}
function showCategory(el) {

    el.forEach(category => {
        console.log(`Category: ${category.firstElementChild.textContent}`)

        console.log(`Elements: ${category.lastElementChild.children.length}`)
    })


}

showNumberOfCategories(categoriesListEl)
showCategory(categoryELs)