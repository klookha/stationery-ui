export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    brand: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Classic Notebook',
      category: 'Notebooks',
      price: 199,
      image: '/products/notebook1.png',
      brand: 'PaperPro',
    },
    {
      id: 2,
      name: 'Ideas Notebook',
      category: 'Notebooks',
      price: 599,
      image: '/products/notebook2.png',
      brand: 'PaperPro',
    },
    {
      id: 3,
      name: 'Gel Pen Set',
      category: 'Pens',
      price: 149,
      image: '/products/pens1.png',
      brand: 'WriteRight',
    },
    {
      id: 4,
      name: 'Wooden Desk Organizer',
      category: 'Organizers',
      price: 499,
      image: '/products/organizer1.png',
      brand: 'DeskMate',
    },
    {
      id: 5,
      name: 'Acrylic Paint Kit',
      category: 'Art Supplies',
      price: 299,
      image: '/products/acrylic1.png',
      brand: 'ColorSplash',
    },
    // Add more as needed
  ];
  
  export const categories = ['Notebooks', 'Pens', 'Organizers', 'Art Supplies'];
  
  export const brands = ['PaperPro', 'WriteRight', 'DeskMate', 'ColorSplash'];
  