
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
    "All", "Pizza", "Burgers", "Asian", "Mexican", "Italian", "Desserts", "Healthy"
  ];

  const restaurants = [
    {
      id: 1,
      name: "Mario's Pizza Palace",
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35",
      deliveryFee: 2.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "Pizza"
    },
    {
      id: 2,
      name: "Burger Paradise",
      cuisine: "American",
      rating: 4.6,
      deliveryTime: "20-30",
      deliveryFee: 1.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "Burgers"
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.7,
      deliveryTime: "30-40",
      deliveryFee: 3.49,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d24a?w=400&h=300&fit=crop",
      category: "Asian"
    },
    {
      id: 4,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.5,
      deliveryTime: "15-25",
      deliveryFee: 2.49,
      image: "https://images.unsplash.com/photo-1565299585323-38174c26d62a?w=400&h=300&fit=crop",
      category: "Mexican"
    },
    {
      id: 5,
      name: "Green Garden",
      cuisine: "Healthy",
      rating: 4.9,
      deliveryTime: "20-30",
      deliveryFee: 2.99,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      category: "Healthy"
    },
    {
      id: 6,
      name: "Sweet Dreams Bakery",
      cuisine: "Desserts",
      rating: 4.8,
      deliveryTime: "35-45",
      deliveryFee: 1.99,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      category: "Desserts"
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
              <h1 className="text-2xl font-bold text-gray-900">FoodieExpress</h1>
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
            Delicious food,<br />delivered fast
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your favorite restaurants, right at your doorstep
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for restaurants or cuisines..."
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
