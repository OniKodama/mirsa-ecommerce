const products = [
    {
        id: '1',
        title: "Cammo T-Shirt",
        img: "https://allforfashiondesign.com/wp-content/uploads/2014/02/gv-16.jpg",
        price: "15",
        stock: 8,
        category: 'women',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: '2',
        title: "Inca diver",
        img: "https://hips.hearstapps.com/hmg-prod/images/uo-1586288179.jpeg?resize=480:*",
        price: "25",
        stock: 5,
        category: 'men',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    {
        id: '3',
        title: "Red Dress",
        img: "https://i.pinimg.com/474x/8b/cb/65/8bcb65754d8e6f08a7e3d1d2c9eab893.jpg",
        price: "30",
        stock: 5,
        category: 'women',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        },300)
    })
}
export const getProductById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },300)
    })
}
export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        },300)
    })
}