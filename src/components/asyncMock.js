const products = [
    {
        id: '1',
        name: 'Intel i7',
        price: 90000,
        category: 'Hardware',
        img: '/Images/inteli712.webp',
        stock: 10,
        description: 'Microprocesador Intel i7 12va Generación'
    },
    {
        id: '2',
        name: 'Intel i9',
        price: 150000,
        category: 'Hardware',
        img: '/Images/inteli912.webp',
        stock: 10,
        description: 'Microprocesador Intel i9 12va Generación'
    },
    {
        id: '3',
        name: 'Gigabyte 2060',
        price: 130000,
        category: 'Hardware',
        img: '/Images/placadevideoGigabyte2060.webp',
        stock: 10,
        description: 'Placa de video Gigabyte 2060'
    },
    {
        id: '4',
        name: 'RTX 3090',
        price: 450000,
        category: 'Hardware',
        img: '/Images/placavideoGtx3090.webp',
        stock: 10,
        description: 'Placa de video RTX 3090'
    },
    {
        id: '5',
        name: 'Samsung 24" FHD',
        price: 59000,
        category: 'Monitores',
        img: '/Images/samsung24.webp',
        stock: 10,
        description: 'Monitor Samsung 24" Full HD'
    },
    {
        id: '6',
        name: 'Samsung 27" FHD',
        price: 80000,
        category: 'Monitores',
        img: '/Images/samsung27.webp',
        stock: 10,
        description: 'Monitor Samsung 27" Full HD'
    },
    {
        id: '7',
        name: 'Benq 28" UHD',
        price: 95000,
        category: 'Monitores',
        img: '/Images/benq28.webp',
        stock: 10,
        description: 'Monitor Benq 28" Ultra HD'
    },
    {
        id: '8',
        name: 'Asus 32" UHD',
        price: 120000,
        category: 'Monitores',
        img: '/Images/asus32.webp',
        stock: 10,
        description: 'Monitor Asus 32" UHD Gamer'
    },
    {
        id: '9',
        name: 'Mouse Razer V2',
        price: 5500,
        category: 'Periféricos',
        img:'/Images/mouseRazerGamer.webp',
        stock: 10,
        description: 'Mouse Razer Gamer V2'
    },
    {
        id: '10',
        name: 'HyperX Gamer',
        price: 8500,
        category: 'Periféricos',
        img: '/Images/tecladoHyperXGamer.webp',
        stock: 10,
        description: 'Teclado HyperX Gamer'
    },
    {
        id: '11',
        name: 'Redragon Gamer 1',
        price: 15000,
        category: 'Periféricos',
        img: '/Images/auricularesRedragonGamer.webp',
        stock: 10,
        description: 'Auriculares Redragon v1'
    },
    {
        id: '12',
        name: 'Redragon Gamer 2',
        price: 19000,
        category: 'Periféricos',
        img: '/Images/AuricularesRedragonGamer2.webp',
        stock: 10,
        description: 'Auriculares Redragon v2'
    },
    {
        id: '13',
        name: 'Notebook Hp',
        price: 95000,
        category: 'Notebooks',
        img: '/Images/notebookHp.webp',
        stock: 10,
        description: 'Notebook HP FHD'
    },
    {
        id: '14',
        name: 'Notebook Dell Inspiron',
        price: 150000,
        category: 'Notebooks',
        img: '/Images/notebookDellInspiron.webp',
        stock: 10,
        description: 'Notebook Dell Inspiron FHD'
    },
    {
        id: '15',
        name: 'Notebook Asus Gamer',
        price: 210000,
        category: 'Notebooks',
        img: '/Images/notebookAsusGamer.webp',
        stock: 10,
        description: 'Notebook Asus Gamer Pro'
    },
    {
        id: '16',
        name: 'Notebook Msi Gamer',
        price: 310000,
        category: 'Notebooks',
        img: '/Images/notebookMsiGamer.webp',
        stock: 10,
        description: 'Notebook Msi Gamer Pro'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
