import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter, SortAsc, SortDesc } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "Ergonomic Chair", price: 199.99, category: "Furniture", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Wireless Keyboard", price: 59.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "LED Desk Lamp", price: 39.99, category: "Lighting", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Noise-Cancelling Headphones", price: 149.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Adjustable Standing Desk", price: 299.99, category: "Furniture", image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Wireless Mouse", price: 29.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Ergonomic Keyboard", price: 79.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Monitor Stand", price: 49.99, category: "Accessories", image: "/placeholder.svg?height=200&width=200" },
  { id: 9, name: "Desk Organizer", price: 24.99, category: "Accessories", image: "/placeholder.svg?height=200&width=200" },
  { id: 10, name: "Wireless Charger", price: 34.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
  { id: 11, name: "Laptop Stand", price: 39.99, category: "Accessories", image: "/placeholder.svg?height=200&width=200" },
  { id: 12, name: "Mechanical Keyboard", price: 129.99, category: "Electronics", image: "/placeholder.svg?height=200&width=200" },
];

const BrowseProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 8;

  useEffect(() => {
    let result = [...products];

    if (categoryFilter !== 'All') {
      result = result.filter(product => product.category === categoryFilter);
    }

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [categoryFilter, sortOrder, searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categories = ['All', ...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Browse Our Products</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-4">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            aria-label={sortOrder === 'asc' ? 'Sort descending' : 'Sort ascending'}
          >
            {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
          </Button>
        </div>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {currentProducts.map(product => (
          <Card key={product.id} className="flex flex-col justify-between">
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-md" />
              <CardTitle className="text-sm md:text-base">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-sm text-gray-600">{product.category}</p>
              <p className="text-sm md:text-lg font-bold mt-1">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-xs md:text-sm">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length > productsPerPage && (
        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-xs md:text-sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => paginate(i + 1)}
              className="text-xs md:text-sm"
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
            className="text-xs md:text-sm"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default BrowseProducts;