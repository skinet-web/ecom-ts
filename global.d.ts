export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
 
  interface Slug {
    current: string;
    slug: string;
  }
  
  interface Product {
    name: string;
    slug: Slug;
    price: number;
    details: string;
    image: Array;
    
  }

  interface Products {
    name: string;
    product: string;
    _id: string;
    slug: Slug;
    price: number;
    details: string;
    image: Array;
  }
  
  
  
  interface productProps {
    product: Product;  
  }
}