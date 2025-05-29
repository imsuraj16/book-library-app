import React from 'react'
import { BookOpen, Plus, Edit, Trash2, Search, Users, Star } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#F0EBCC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-800 p-4 rounded-full shadow-lg">
              <BookOpen className="w-12 h-12 text-[#F0EBCC]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            About Our Library
          </h1>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto leading-relaxed">
            Welcome to your comprehensive digital library management system, where knowledge meets organization.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-amber-200">
          <h2 className="text-3xl font-semibold text-amber-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-amber-800 leading-relaxed text-center max-w-3xl mx-auto">
            To provide an intuitive and powerful platform for managing your book collection, 
            making it easier than ever to organize, discover, and maintain your personal library. 
            Whether you're a casual reader or a serious bibliophile, our system adapts to your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-amber-900 mb-10 text-center">What You Can Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Create */}
            <div className="bg-emerald-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Create</h3>
              <p className="text-emerald-700">
                Add new books to your collection with detailed information including title, author, genre, and personal notes.
              </p>
            </div>

            {/* Read/Search */}
            <div className="bg-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Discover</h3>
              <p className="text-blue-700">
                Browse and search through your entire collection with powerful filtering and sorting options to find exactly what you need.
              </p>
            </div>

            {/* Update */}
            <div className="bg-amber-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Edit className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Update</h3>
              <p className="text-amber-700">
                Edit book details, update reading status, modify ratings, and keep your library information current and accurate.
              </p>
            </div>

            {/* Delete */}
            <div className="bg-red-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">Organize</h3>
              <p className="text-red-700">
                Remove books you no longer own or want to track, keeping your collection clean and relevant to your current interests.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-semibold text-amber-900 mb-8 text-center">Why Choose Our Library System?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">User-Friendly</h3>
              <p className="text-amber-800">
                Intuitive interface designed for book lovers of all technical skill levels.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Feature-Rich</h3>
              <p className="text-amber-800">
                Complete CRUD operations with advanced search, filtering, and organization tools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Book-Focused</h3>
              <p className="text-amber-800">
                Built specifically for book management with features that matter to readers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-amber-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#F0EBCC] mb-4">
            Start Building Your Digital Library Today
          </h2>
          <p className="text-amber-200 text-lg mb-6 max-w-2xl mx-auto">
            Transform the way you manage your book collection. Organize, track, and discover your next great read with our comprehensive library management system.
          </p>
          <button className="bg-[#F0EBCC] text-amber-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default About