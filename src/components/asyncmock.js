const products = [
    {
        id:'1',
        name: 'Camiseta Titular',
        price:10000,
        category:'Camiseta de futbol',
        img:'/images/titular2.png',
        stock:10,
        description: '1ra Equipacion. "Nunca Paras de ser cuervo" ',
    },
    {
        id:'2',
        name: 'Camiseta Suplente',
        price:10000,
        category:'Camiseta de futbol',
        img:'/images/suplentecasla.png',
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