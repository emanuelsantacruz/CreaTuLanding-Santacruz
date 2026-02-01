const products = [
    {
        id: '1',
        name: 'Lattafa Yara 100ml',
        price: 40000,
        category: 'mujer',
        img: '/img/yara.jpg',
        stock: 10,
        description: 'Lattafa Yara es una fragancia dulce y cremosa con notas de orquídea, heliotropo y vainilla.'
    },
    {
        id: '2',
        name: 'Club de Nuit EDT',
        price: 40000,
        category: 'hombre',
        img: '/img/clubdenuit.jpg',
        stock: 10,
        description: 'Un clásico moderno con notas cítricas, madera y un fondo ahumado intenso.'
    },
    {
        id: '3',
        name: 'Animale men EDT',
        price: 40000,
        category: 'hombre',
        img: '/img/animale.jpg',
        stock: 10,
        description: 'Fragancia audaz y sofisticada con notas de menta, cítricos y lavanda.'
    },
    {
        id: '4',
        name: 'Honor and Glory',
        price: 60000,
        category: 'unisex',
        img: '/img/badeealoud.jpg',
        stock: 10,
        description: 'Aroma oriental especiado con oud, ideal para quienes buscan intensidad.'
    },
    {
        id: '5',
        name: 'Emper Stallion',
        price: 40000,
        category: 'hombre',
        img: '/img/emperstallion.jpg',
        stock: 10,
        description: 'Una fragancia potente y masculina con toques amaderados y especiados.'
    },
    {
        id: '6',
        name: 'Versace Eros Flame',
        price: 90000,
        category: 'hombre',
        img: '/img/versaceflame.jpg',
        stock: 10,
        description: 'Pasión y fuerza en una botella. Notas de chinotto, limón y pimienta negra.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
