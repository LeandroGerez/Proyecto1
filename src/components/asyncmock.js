const products = [
    {
        id:'1',
        name: 'Camiseta Titular',
        price:10000,
        category:'Camiseta de futbol',
        img:'/images/suplente.jpg',
        stock:10,
        description: '3era Equipacion. "Nunca Paras de ser cuervo" ',
    },
    {
        id:'2',
        name: 'Camiseta Suplente',
        price:10000,
        category:'Camiseta de futbol',
        img:'https://www.soycuervo.com/ccstore/v1/images/?source=/file/v4164183528857031988/products/9891_100_1.jpg&height=475&width=475',
        stock:5,
        description: '2da Equipacion. "Nunca Paras de ser cuervo" ',
    }
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        },2000)
    })
}