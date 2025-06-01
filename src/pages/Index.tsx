
import { useState } from "react";
import { Search, MapPin, Star, Clock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Dosa & Idli", "Snacks", "Rice Items", "Curries", "Sweets", "Beverages", "Tiffin"
  ];

  const restaurants = [
    {
      id: 1,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.8,
      deliveryTime: "25-35",
      deliveryFee: 2.99,
      image: "/lovable-uploads/117ac463-e97b-4557-996b-c83597f15666.png",
      category: "Dosa & Idli"
    },
    {
      id: 2,
      name: "Murugan Idli Shop",
      cuisine: "South Indian",
      rating: 4.7,
      deliveryTime: "20-30",
      deliveryFee: 1.99,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      category: "Tiffin"
    },
    {
      id: 3,
      name: "Aryaas Restaurant",
      cuisine: "Kerala",
      rating: 4.6,
      deliveryTime: "30-40",
      deliveryFee: 3.49,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      category: "Rice Items"
    },
    {
      id: 4,
      name: "Chutney Chang",
      cuisine: "South Indian",
      rating: 4.5,
      deliveryTime: "15-25",
      deliveryFee: 2.49,
      image: "/lovable-uploads/caa3e81a-734b-49f8-b2e4-2e5fa4270a93.png",
      category: "Snacks"
    },
    {
      id: 5,
      name: "Dakshin Restaurant",
      cuisine: "South Indian",
      rating: 4.9,
      deliveryTime: "35-45",
      deliveryFee: 4.99,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
      category: "Curries"
    },
    {
      id: 6,
      name: "Hotel Annapoorna",
      cuisine: "Tamil Nadu",
      rating: 4.4,
      deliveryTime: "25-35",
      deliveryFee: 2.99,
      image: "/lovable-uploads/42e7faa3-32b9-4fd5-986b-650cb587f038.png",
      category: "Snacks"
    },
    {
      id: 7,
      name: "Mysore Pak House",
      cuisine: "Karnataka",
      rating: 4.6,
      deliveryTime: "40-50",
      deliveryFee: 3.99,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      category: "Sweets"
    },
    {
      id: 8,
      name: "Filter Coffee Corner",
      cuisine: "South Indian",
      rating: 4.3,
      deliveryTime: "15-20",
      deliveryFee: 1.49,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      category: "Beverages"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">South Indian Express</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Deliver to Home</span>
              </div>
              <Button variant="outline" size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Authentic South Indian,<br />delivered fresh
          </h2>
          <p className="text-xl mb-8 opacity-90">
            From crispy dosas to filter coffee, taste the heritage
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for dosa, idli, sambar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg text-gray-900 bg-white border-0 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap ${
                selectedCategory === category 
                  ? "bg-orange-500 hover:bg-orange-600" 
                  : "hover:bg-orange-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {selectedCategory === "All" ? "All Restaurants" : selectedCategory} 
          <span className="text-gray-500 font-normal ml-2">
            ({filteredRestaurants.length} restaurants)
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white">
                  {restaurant.cuisine}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                    {restaurant.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <span className="font-medium">${restaurant.deliveryFee} delivery</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or browse all categories</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
