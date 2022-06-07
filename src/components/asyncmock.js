const products = [
    {
        id:'1',
        name: 'Camiseta Titular',
        price:10000,
        category:'Camiseta',
        img:'/images/titular2.png',
        stock:10,
        description: '1ra Equipacion. "Nunca Paras de ser cuervo" ',
    },
    {
        id:'2',
        name: 'Camiseta Suplente',
        price:10000,
        category:'Camiseta ',
        img:'/images/suplentecasla.png',
        stock:5,
        description: '2da Equipacion. "Nunca Paras de ser cuervo" ',
    },
    {
        id:'3',
        name: 'Botines',
        price:25000,
        category:'Botin',
        img:'/images/Botin.png',
        stock:4,
        size: 39,
        description: 'Botines Negros ',
    },
    {
        id:'4',
        name: 'Campera',
        price:30000,
        category:'indumentaria',
        img:'/images/camperon.jpg',
        stock:5,
        description: 'Camperon de SAN LORENZO ',
    },
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        },1000)
    })
}

export const getProductsById = (id) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },1000)
    })

}

export const getProductsByCategory = (categoryId) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },1000)
    })

}