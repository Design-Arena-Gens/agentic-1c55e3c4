'use client';

import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: "Smart Cafe Management System",
    subtitle: "B.Tech Mini Project",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-8xl mb-4">☕</div>
        <h1 className="text-7xl font-bold text-amber-900">Smart Cafe Management System</h1>
        <h2 className="text-4xl text-amber-700">B.Tech Mini Project</h2>
        <div className="mt-12 text-2xl text-gray-700 space-y-2">
          <p>Presented by: [Your Name]</p>
          <p>Roll Number: [Your Roll No]</p>
          <p>Department: Computer Science & Engineering</p>
          <p className="mt-6">[College Name]</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-amber-100 to-orange-200"
  },
  {
    id: 2,
    title: "Motivation & Background",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-amber-900 mb-8">Motivation & Background</h2>
        <div className="text-3xl space-y-6 text-gray-800">
          <div className="flex items-start space-x-4">
            <span className="text-4xl">🎯</span>
            <p><strong>Digital transformation</strong> in small cafés and restaurants</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-4xl">💡</span>
            <p>Need for <strong>affordable, simple solutions</strong> in Indian context</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-4xl">📱</span>
            <p>Growing demand for contactless and efficient service</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-4xl">🚀</span>
            <p>Opportunity to streamline operations and reduce costs</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block bg-amber-200 px-8 py-4 rounded-lg">
            <p className="text-2xl text-amber-900">Making technology accessible to local businesses</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-orange-50 to-amber-100"
  },
  {
    id: 3,
    title: "Literature Review / Existing Systems",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-amber-900 mb-8">Literature Review / Existing Systems</h2>
        <div className="grid grid-cols-2 gap-8 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-700 mb-4">Existing Solutions</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Square POS</li>
              <li>✓ Toast POS</li>
              <li>✓ Lightspeed Restaurant</li>
              <li>✓ Petpooja</li>
              <li>✓ Posist</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-red-700 mb-4">Identified Gaps</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✗ High subscription costs</li>
              <li>✗ Complex setup process</li>
              <li>✗ Not localized for India</li>
              <li>✗ Requires expensive hardware</li>
              <li>✗ Limited offline capability</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 rounded-lg text-white mt-8">
          <p className="text-3xl font-bold text-center">💡 Opportunity: Lightweight, web-based, affordable solution</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 4,
    title: "Problem Statement",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-red-900 mb-8">Problem Statement</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-4xl">⚠️</span>
              <h3 className="text-3xl font-bold text-red-800">Manual Billing Errors</h3>
            </div>
            <p className="text-gray-700">Handwritten bills lead to calculation mistakes and revenue loss</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-4xl">📊</span>
              <h3 className="text-3xl font-bold text-orange-800">No Sales Tracking</h3>
            </div>
            <p className="text-gray-700">Difficult to analyze performance and make data-driven decisions</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-600">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-4xl">📱</span>
              <h3 className="text-3xl font-bold text-yellow-800">Poor Communication</h3>
            </div>
            <p className="text-gray-700">Cashier-kitchen coordination issues cause delays and errors</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg border-l-4 border-pink-600">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-4xl">📦</span>
              <h3 className="text-3xl font-bold text-pink-800">No Inventory Tracking</h3>
            </div>
            <p className="text-gray-700">Stock wastage and inability to track customer preferences</p>
          </div>
        </div>
        <div className="text-center text-5xl mt-8">🏪 ➡️ 💻</div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-pink-100"
  },
  {
    id: 5,
    title: "Objectives",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-blue-900 mb-8">Project Objectives</h2>
        <div className="space-y-6 text-3xl">
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-blue-600">1</span>
            <div>
              <h3 className="font-bold text-blue-800 mb-2">Automate Billing Process</h3>
              <p className="text-2xl text-gray-700">Generate accurate digital bills instantly and reduce errors</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-green-600">2</span>
            <div>
              <h3 className="font-bold text-green-800 mb-2">Real-time Order Management</h3>
              <p className="text-2xl text-gray-700">Seamless communication between cashier and kitchen staff</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-purple-600">3</span>
            <div>
              <h3 className="font-bold text-purple-800 mb-2">Track Sales & Analytics</h3>
              <p className="text-2xl text-gray-700">Generate reports and insights for better business decisions</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-orange-600">4</span>
            <div>
              <h3 className="font-bold text-orange-800 mb-2">Inventory Management</h3>
              <p className="text-2xl text-gray-700">Monitor stock levels and reduce wastage</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
            <span className="text-5xl font-bold text-red-600">5</span>
            <div>
              <h3 className="font-bold text-red-800 mb-2">Customer Database</h3>
              <p className="text-2xl text-gray-700">Maintain records for loyalty programs and personalization</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100"
  },
  {
    id: 6,
    title: "Scope of the Project",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-indigo-900 mb-8">Scope of the Project</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-green-800 mb-4">✓ In Scope</h3>
              <ul className="space-y-3 text-2xl text-gray-700">
                <li>• Order placement & billing</li>
                <li>• Kitchen display system</li>
                <li>• Menu management</li>
                <li>• Sales reports & analytics</li>
                <li>• Basic inventory tracking</li>
                <li>• User authentication</li>
                <li>• Multi-device access</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-800 mb-4">✗ Out of Scope</h3>
              <ul className="space-y-3 text-2xl text-gray-700">
                <li>• Payment gateway integration</li>
                <li>• Advanced accounting features</li>
                <li>• Employee attendance system</li>
                <li>• Table reservation system</li>
                <li>• Customer mobile app</li>
                <li>• Hardware integration (printers)</li>
                <li>• Multi-location support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-indigo-200 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-indigo-900">Focus: Core cafe management for single-location businesses</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-50 to-purple-100"
  },
  {
    id: 7,
    title: "System Architecture",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-purple-900 mb-8">System Architecture</h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center w-3/4">
            <p className="text-3xl font-bold">Frontend (React.js)</p>
            <p className="text-xl mt-2">User Interface Layer</p>
          </div>
          <div className="text-5xl">⬇️</div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center w-3/4">
            <p className="text-3xl font-bold">Backend (Node.js + Express)</p>
            <p className="text-xl mt-2">Business Logic & API Layer</p>
          </div>
          <div className="text-5xl">⬇️</div>
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg text-center w-3/4">
            <p className="text-3xl font-bold">Database (MongoDB)</p>
            <p className="text-xl mt-2">Data Storage Layer</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 text-center text-xl">
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-bold">🖥️ Responsive Web App</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-bold">☁️ Cloud Hosted</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-bold">🔒 Secure Authentication</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-pink-100"
  },
  {
    id: 8,
    title: "Technology Stack",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-teal-900 mb-8">Technology Stack</h2>
        <div className="grid grid-cols-2 gap-8 text-2xl">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-blue-800 mb-6">Frontend</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <span className="text-3xl">⚛️</span>
                <span><strong>React.js</strong> - UI framework</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🎨</span>
                <span><strong>Tailwind CSS</strong> - Styling</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">📊</span>
                <span><strong>Chart.js</strong> - Data visualization</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🔄</span>
                <span><strong>Redux</strong> - State management</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-green-800 mb-6">Backend</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🟢</span>
                <span><strong>Node.js</strong> - Runtime environment</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🚂</span>
                <span><strong>Express.js</strong> - Web framework</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🍃</span>
                <span><strong>MongoDB</strong> - NoSQL database</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-3xl">🔐</span>
                <span><strong>JWT</strong> - Authentication</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white text-center">
          <p className="text-3xl font-bold">Modern MERN Stack Architecture</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100"
  },
  {
    id: 9,
    title: "System Features - Overview",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-rose-900 mb-8">System Features - Overview</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="text-3xl font-bold text-blue-800 mb-3">Order Management</h3>
            <p className="text-gray-700">Create, modify, and track orders in real-time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="text-3xl font-bold text-green-800 mb-3">Menu Management</h3>
            <p className="text-gray-700">Add, edit, and organize menu items with pricing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
            <div className="text-4xl mb-3">🧾</div>
            <h3 className="text-3xl font-bold text-purple-800 mb-3">Billing System</h3>
            <p className="text-gray-700">Generate digital bills with GST calculations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
            <div className="text-4xl mb-3">👨‍🍳</div>
            <h3 className="text-3xl font-bold text-orange-800 mb-3">Kitchen Display</h3>
            <p className="text-gray-700">Real-time order display for kitchen staff</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-3xl font-bold text-red-800 mb-3">Sales Analytics</h3>
            <p className="text-gray-700">Visual reports and revenue tracking</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-3xl font-bold text-pink-800 mb-3">Inventory Tracking</h3>
            <p className="text-gray-700">Monitor stock levels and get alerts</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-rose-50 to-red-100"
  },
  {
    id: 10,
    title: "Feature 1: Order Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-blue-900 mb-8">Order Management Module</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-blue-700">Key Features:</h3>
            <ul className="space-y-4 text-2xl text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-3xl">✓</span>
                <span>Quick order creation with search and filters</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-3xl">✓</span>
                <span>Table-wise order tracking</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-3xl">✓</span>
                <span>Order status updates (Pending, Preparing, Ready, Served)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-3xl">✓</span>
                <span>Modify orders before completion</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-3xl">✓</span>
                <span>Split bills between customers</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🛒</div>
              <p className="text-3xl font-bold text-gray-800">Order Flow</p>
            </div>
            <div className="space-y-4 text-xl">
              <div className="flex items-center space-x-3">
                <span className="bg-yellow-400 text-white font-bold px-4 py-2 rounded">1</span>
                <span>Select items from menu</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-orange-400 text-white font-bold px-4 py-2 rounded">2</span>
                <span>Send to kitchen</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-blue-400 text-white font-bold px-4 py-2 rounded">3</span>
                <span>Track preparation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-green-400 text-white font-bold px-4 py-2 rounded">4</span>
                <span>Generate bill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 11,
    title: "Feature 2: Menu Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-green-900 mb-8">Menu Management Module</h2>
        <div className="space-y-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-700 mb-4">📋 Menu Organization</h3>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li>• Category-based menu structure (Beverages, Snacks, Main Course, Desserts)</li>
              <li>• Easy drag-and-drop item reordering</li>
              <li>• Search and filter functionality</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">✏️ Item Management</h3>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li>• Add new items with name, price, description, and image</li>
              <li>• Edit existing items and pricing</li>
              <li>• Mark items as available/unavailable</li>
              <li>• Set item variations (size, add-ons, customizations)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-purple-700 mb-4">⚡ Advanced Features</h3>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li>• Bulk price updates</li>
              <li>• Special offers and discounts</li>
              <li>• Popular item tagging</li>
              <li>• Dietary information (Veg/Non-veg/Vegan)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    id: 12,
    title: "Feature 3: Billing System",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-purple-900 mb-8">Billing System</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-purple-700 mb-4">💳 Bill Generation</h3>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>✓ Itemized bill with quantities</li>
                <li>✓ Automatic tax calculation (GST)</li>
                <li>✓ Apply discounts and offers</li>
                <li>✓ Multiple payment methods</li>
                <li>✓ Digital bill format (PDF)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-orange-700 mb-4">📄 Bill Features</h3>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>✓ Bill history and reprints</li>
                <li>✓ Custom bill numbering</li>
                <li>✓ Customer details on bill</li>
                <li>✓ Service charge options</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-lg shadow-xl">
            <div className="bg-white p-6 rounded shadow-lg">
              <div className="text-center mb-4">
                <p className="text-2xl font-bold">CAFE INVOICE</p>
                <p className="text-sm text-gray-600">Bill #12345</p>
              </div>
              <div className="border-t border-b py-4 my-4 space-y-2 text-lg">
                <div className="flex justify-between">
                  <span>2x Cappuccino</span>
                  <span>₹240</span>
                </div>
                <div className="flex justify-between">
                  <span>1x Sandwich</span>
                  <span>₹120</span>
                </div>
                <div className="flex justify-between">
                  <span>1x Brownie</span>
                  <span>₹80</span>
                </div>
              </div>
              <div className="space-y-2 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹440</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%):</span>
                  <span>₹22</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-2">
                  <span>Total:</span>
                  <span>₹462</span>
                </div>
              </div>
              <div className="text-center mt-6 text-sm text-gray-600">
                <p>Thank you for your visit! ☕</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-violet-100"
  },
  {
    id: 13,
    title: "Feature 4: Kitchen Display System",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-orange-900 mb-8">Kitchen Display System (KDS)</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-orange-700 mb-6 flex items-center space-x-3">
              <span>👨‍🍳</span>
              <span>Real-time Order Display</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 text-xl">
              <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-800 mb-2">🟡 NEW</p>
                <p className="text-sm text-gray-700">Just received orders waiting to be prepared</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-800 mb-2">🔵 PREPARING</p>
                <p className="text-sm text-gray-700">Orders currently being prepared in kitchen</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-800 mb-2">🟢 READY</p>
                <p className="text-sm text-gray-700">Completed orders ready for serving</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-2xl">
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-3xl font-bold text-orange-800 mb-4">✨ Key Benefits</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Eliminates paper order slips</li>
                <li>• Reduces order errors</li>
                <li>• Faster order preparation</li>
                <li>• Better kitchen organization</li>
                <li>• Tracks order timing</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-3xl font-bold text-blue-800 mb-4">⚙️ Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Priority-based sorting</li>
                <li>• Order countdown timers</li>
                <li>• One-click status update</li>
                <li>• Table/order number display</li>
                <li>• Special instructions visible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-orange-50 to-amber-100"
  },
  {
    id: 14,
    title: "Feature 5: Sales Analytics",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-cyan-900 mb-8">Sales Analytics & Reports</h2>
        <div className="grid grid-cols-2 gap-6 text-xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-cyan-700 mb-4">📊 Dashboard Metrics</h3>
            <div className="space-y-4">
              <div className="bg-green-100 p-4 rounded">
                <p className="font-bold text-green-800">Today's Revenue</p>
                <p className="text-3xl font-bold text-green-900">₹12,450</p>
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <p className="font-bold text-blue-800">Orders Completed</p>
                <p className="text-3xl font-bold text-blue-900">87</p>
              </div>
              <div className="bg-purple-100 p-4 rounded">
                <p className="font-bold text-purple-800">Average Order Value</p>
                <p className="text-3xl font-bold text-purple-900">₹143</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-orange-700 mb-4">📈 Report Types</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span>📅</span>
                <span><strong>Daily Sales Report</strong> - Day-wise breakdown</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📊</span>
                <span><strong>Best Sellers</strong> - Top performing items</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span><strong>Peak Hours</strong> - Busiest time analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>💰</span>
                <span><strong>Revenue Trends</strong> - Weekly/monthly comparison</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🎯</span>
                <span><strong>Category Performance</strong> - Sales by category</span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg text-white">
            <h3 className="text-3xl font-bold mb-4">📉 Visual Analytics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-5xl mb-2">📊</p>
                <p className="font-bold">Bar Charts</p>
              </div>
              <div className="text-center">
                <p className="text-5xl mb-2">📈</p>
                <p className="font-bold">Line Graphs</p>
              </div>
              <div className="text-center">
                <p className="text-5xl mb-2">🥧</p>
                <p className="font-bold">Pie Charts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100"
  },
  {
    id: 15,
    title: "Feature 6: Inventory Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-emerald-900 mb-8">Inventory Management</h2>
        <div className="space-y-6 text-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-700 mb-4">📦 Stock Tracking</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Real-time stock levels</li>
                <li>✓ Low stock alerts</li>
                <li>✓ Reorder point settings</li>
                <li>✓ Stock in/out logging</li>
                <li>✓ Wastage tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">🔔 Alerts & Notifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li>⚠️ Low stock warnings</li>
                <li>🛑 Out of stock alerts</li>
                <li>📅 Expiry date reminders</li>
                <li>📊 Usage pattern insights</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-emerald-800 mb-4">📋 Inventory Dashboard</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-4xl font-bold text-green-600">245</p>
                <p className="text-lg text-gray-600">Items In Stock</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-4xl font-bold text-yellow-600">12</p>
                <p className="text-lg text-gray-600">Low Stock Items</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-4xl font-bold text-red-600">3</p>
                <p className="text-lg text-gray-600">Out of Stock</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg">
            <p className="text-2xl text-center text-orange-800">
              <strong>💡 Smart Feature:</strong> Automatic stock deduction when orders are placed
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    id: 16,
    title: "User Roles & Permissions",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-indigo-900 mb-8">User Roles & Permissions</h2>
        <div className="grid grid-cols-3 gap-6 text-xl">
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">👨‍💼</div>
              <h3 className="text-3xl font-bold text-red-800">Admin</h3>
            </div>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Full system access</li>
              <li>✓ User management</li>
              <li>✓ Menu management</li>
              <li>✓ View all reports</li>
              <li>✓ System settings</li>
              <li>✓ Inventory control</li>
              <li>✓ Financial reports</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">💰</div>
              <h3 className="text-3xl font-bold text-blue-800">Cashier</h3>
            </div>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Create orders</li>
              <li>✓ Generate bills</li>
              <li>✓ Process payments</li>
              <li>✓ View menu</li>
              <li>✓ Check order status</li>
              <li>✓ Customer management</li>
              <li>✗ No admin access</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <div className="text-6xl mb-3">👨‍🍳</div>
              <h3 className="text-3xl font-bold text-orange-800">Kitchen Staff</h3>
            </div>
            <ul className="space-y-2 text-gray-800">
              <li>✓ View incoming orders</li>
              <li>✓ Update order status</li>
              <li>✓ Mark items ready</li>
              <li>✓ View special instructions</li>
              <li>✗ No billing access</li>
              <li>✗ No reports access</li>
              <li>✗ No settings access</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-200 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-indigo-900">🔒 Secure authentication with role-based access control</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-50 to-purple-100"
  },
  {
    id: 17,
    title: "Database Design",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-teal-900 mb-8">Database Schema (MongoDB)</h2>
        <div className="grid grid-cols-2 gap-6 text-lg">
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-800 mb-3">👤 Users Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, name, email</li>
              <li>• password (hashed)</li>
              <li>• role (admin/cashier/kitchen)</li>
              <li>• createdAt, updatedAt</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-800 mb-3">🍽️ MenuItems Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, name, description</li>
              <li>• category, price, image</li>
              <li>• isAvailable, dietary</li>
              <li>• createdAt, updatedAt</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">🛒 Orders Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, orderNumber, tableNo</li>
              <li>• items[] (menuItem, qty, price)</li>
              <li>• status, totalAmount</li>
              <li>• createdBy, createdAt</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-800 mb-3">🧾 Bills Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, billNumber, orderId</li>
              <li>• subtotal, tax, discount</li>
              <li>• grandTotal, paymentMethod</li>
              <li>• createdAt</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-800 mb-3">📦 Inventory Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, itemName, quantity</li>
              <li>• unit, reorderLevel</li>
              <li>• lastRestocked</li>
              <li>• updatedAt</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-pink-800 mb-3">👥 Customers Collection</h3>
            <ul className="space-y-2 text-gray-700 font-mono text-sm">
              <li>• _id, name, phone, email</li>
              <li>• totalOrders, totalSpent</li>
              <li>• lastVisit</li>
              <li>• createdAt</li>
            </ul>
          </div>
        </div>
        <div className="bg-teal-200 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-teal-900">🔗 Collections linked via ObjectId references</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100"
  },
  {
    id: 18,
    title: "Security Features",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-red-900 mb-8">Security Features</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">🔐</span>
              <h3 className="text-3xl font-bold text-red-800">Authentication</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• JWT token-based authentication</li>
              <li>• Secure password hashing (bcrypt)</li>
              <li>• Session management</li>
              <li>• Auto-logout on inactivity</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">🛡️</span>
              <h3 className="text-3xl font-bold text-orange-800">Authorization</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Role-based access control (RBAC)</li>
              <li>• Route-level permissions</li>
              <li>• API endpoint protection</li>
              <li>• Feature-level restrictions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">🔒</span>
              <h3 className="text-3xl font-bold text-blue-800">Data Protection</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• HTTPS encryption</li>
              <li>• Sensitive data encryption</li>
              <li>• SQL injection prevention</li>
              <li>• XSS attack protection</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">📝</span>
              <h3 className="text-3xl font-bold text-green-800">Audit & Logging</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• User activity logging</li>
              <li>• Transaction audit trails</li>
              <li>• Error logging & monitoring</li>
              <li>• Access attempt tracking</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-lg text-white text-center">
          <p className="text-3xl font-bold">🔐 Security-first approach protecting business data and customer privacy</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-orange-100"
  },
  {
    id: 19,
    title: "Implementation Timeline",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-violet-900 mb-8">Implementation Timeline</h2>
        <div className="space-y-6 text-2xl">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg text-3xl min-w-[200px] text-center">
              Week 1-2
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="font-bold text-blue-800 mb-2">📋 Planning & Design</h3>
              <p className="text-gray-700">Requirements gathering, database design, UI/UX wireframes</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg text-3xl min-w-[200px] text-center">
              Week 3-4
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="font-bold text-green-800 mb-2">🔧 Backend Development</h3>
              <p className="text-gray-700">API development, database setup, authentication system</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500 text-white font-bold px-6 py-3 rounded-lg text-3xl min-w-[200px] text-center">
              Week 5-6
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="font-bold text-purple-800 mb-2">🎨 Frontend Development</h3>
              <p className="text-gray-700">React components, responsive UI, integration with backend</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg text-3xl min-w-[200px] text-center">
              Week 7
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="font-bold text-orange-800 mb-2">🧪 Testing</h3>
              <p className="text-gray-700">Unit testing, integration testing, bug fixes, UAT</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg text-3xl min-w-[200px] text-center">
              Week 8
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="font-bold text-red-800 mb-2">🚀 Deployment</h3>
              <p className="text-gray-700">Production deployment, documentation, user training</p>
            </div>
          </div>
        </div>
        <div className="bg-violet-200 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-violet-900">⏱️ Total Duration: 8 Weeks</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-violet-50 to-purple-100"
  },
  {
    id: 20,
    title: "Testing Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-indigo-900 mb-8">Testing Strategy</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">🧪 Unit Testing</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Test individual functions</li>
              <li>• API endpoint testing</li>
              <li>• Component testing</li>
              <li>• Jest & React Testing Library</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-800 mb-4">🔗 Integration Testing</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• API + Database integration</li>
              <li>• Frontend + Backend flow</li>
              <li>• End-to-end workflows</li>
              <li>• Postman collection tests</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-purple-800 mb-4">👤 User Acceptance Testing</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Real user scenarios</li>
              <li>• Cafe staff feedback</li>
              <li>• Usability testing</li>
              <li>• Performance under load</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">🔒 Security Testing</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Authentication testing</li>
              <li>• Authorization checks</li>
              <li>• Input validation</li>
              <li>• Vulnerability scanning</li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-200 p-6 rounded-lg">
          <h3 className="text-3xl font-bold text-indigo-900 mb-4 text-center">Test Coverage Goals</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-5xl font-bold text-indigo-800">80%+</p>
              <p className="text-xl text-gray-700">Code Coverage</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-800">100%</p>
              <p className="text-xl text-gray-700">Critical Paths</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-800">Zero</p>
              <p className="text-xl text-gray-700">Critical Bugs</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-50 to-blue-100"
  },
  {
    id: 21,
    title: "Deployment Architecture",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-cyan-900 mb-8">Deployment Architecture</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center w-3/4">
            <p className="text-3xl font-bold">☁️ Cloud Hosting Platform</p>
            <p className="text-xl mt-2">(AWS / Heroku / Vercel)</p>
          </div>
          <div className="grid grid-cols-3 gap-6 w-full text-center">
            <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-3">🖥️</div>
              <p className="text-2xl font-bold">Frontend</p>
              <p className="text-lg mt-2">React App</p>
              <p className="text-sm">(Vercel/Netlify)</p>
            </div>
            <div className="bg-green-400 text-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-3">⚙️</div>
              <p className="text-2xl font-bold">Backend API</p>
              <p className="text-lg mt-2">Node.js Server</p>
              <p className="text-sm">(Heroku/AWS)</p>
            </div>
            <div className="bg-orange-400 text-white p-6 rounded-lg shadow-lg">
              <div className="text-5xl mb-3">🗄️</div>
              <p className="text-2xl font-bold">Database</p>
              <p className="text-lg mt-2">MongoDB</p>
              <p className="text-sm">(MongoDB Atlas)</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-2xl mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-cyan-800 mb-4">🚀 Deployment Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Continuous Integration/Deployment</li>
              <li>✓ Auto-scaling capabilities</li>
              <li>✓ Load balancing</li>
              <li>✓ SSL certificate (HTTPS)</li>
              <li>✓ CDN for faster delivery</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-800 mb-4">📊 Monitoring</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Uptime monitoring</li>
              <li>✓ Performance metrics</li>
              <li>✓ Error tracking (Sentry)</li>
              <li>✓ Usage analytics</li>
              <li>✓ Database backups</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-cyan-50 to-teal-100"
  },
  {
    id: 22,
    title: "Cost Analysis",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-green-900 mb-8">Cost Analysis</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-800 mb-4">💰 Development Cost</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Development Time:</span>
                <span className="font-bold">8 weeks</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Developer Cost:</span>
                <span className="font-bold">Academic Project</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Tools & Software:</span>
                <span className="font-bold">Free/Open Source</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-3xl font-bold">Total Dev Cost:</span>
                <span className="text-3xl font-bold text-green-600">₹0</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">☁️ Operational Cost (Monthly)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Cloud Hosting:</span>
                <span className="font-bold">₹500-1000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Database (MongoDB):</span>
                <span className="font-bold">₹0-500</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Domain & SSL:</span>
                <span className="font-bold">₹100-200</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-3xl font-bold">Total Monthly:</span>
                <span className="text-3xl font-bold text-blue-600">₹600-1700</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">💡 Cost Comparison with Existing Solutions</h3>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-red-100 p-4 rounded">
              <p className="font-bold text-red-800 text-xl mb-2">Commercial POS Systems</p>
              <p className="text-gray-700">₹5,000-15,000 per month</p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <p className="font-bold text-green-800 text-xl mb-2">Our Solution</p>
              <p className="text-gray-700">₹600-1,700 per month</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg text-center">
          <p className="text-3xl font-bold text-yellow-900">💵 Savings: Up to 90% compared to commercial solutions!</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    id: 23,
    title: "Challenges & Solutions",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-red-900 mb-8">Challenges & Solutions</h2>
        <div className="space-y-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-3">⚠️ Challenge</h3>
                <p className="text-gray-700">Real-time synchronization between cashier and kitchen</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-3">✅ Solution</h3>
                <p className="text-gray-700">WebSocket implementation for instant order updates</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-3">⚠️ Challenge</h3>
                <p className="text-gray-700">Handling peak hours with multiple concurrent orders</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-3">✅ Solution</h3>
                <p className="text-gray-700">Optimized database queries and efficient state management</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-3">⚠️ Challenge</h3>
                <p className="text-gray-700">Data security and preventing unauthorized access</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-3">✅ Solution</h3>
                <p className="text-gray-700">JWT authentication with role-based access control</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-3">⚠️ Challenge</h3>
                <p className="text-gray-700">Making the system user-friendly for non-tech staff</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-3">✅ Solution</h3>
                <p className="text-gray-700">Intuitive UI/UX design with minimal clicks and clear workflow</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-red-800 mb-3">⚠️ Challenge</h3>
                <p className="text-gray-700">Internet connectivity issues in some locations</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-800 mb-3">✅ Solution</h3>
                <p className="text-gray-700">Offline mode with local storage and sync when online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-orange-100"
  },
  {
    id: 24,
    title: "Future Enhancements",
    content: (
      <div className="space-y-8">
        <h2 className="text-6xl font-bold text-violet-900 mb-8">Future Enhancements</h2>
        <div className="grid grid-cols-2 gap-6 text-2xl">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-3xl font-bold text-blue-900 mb-3">Mobile App</h3>
            <p className="text-gray-700">Native iOS and Android apps for better performance</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="text-3xl font-bold text-green-900 mb-3">Payment Integration</h3>
            <p className="text-gray-700">UPI, card payments, and digital wallets</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-3xl font-bold text-purple-900 mb-3">AI Recommendations</h3>
            <p className="text-gray-700">Smart suggestions based on customer preferences</p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-3xl font-bold text-orange-900 mb-3">Loyalty Program</h3>
            <p className="text-gray-700">Points system and customer rewards</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="text-3xl font-bold text-pink-900 mb-3">Multi-location Support</h3>
            <p className="text-gray-700">Manage multiple cafe branches from one dashboard</p>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-3xl font-bold text-teal-900 mb-3">Advanced Analytics</h3>
            <p className="text-gray-700">Predictive analytics and business intelligence</p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🖨️</div>
            <h3 className="text-3xl font-bold text-red-900 mb-3">Printer Integration</h3>
            <p className="text-gray-700">Direct thermal printer support for receipts</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-3xl font-bold text-yellow-900 mb-3">Online Ordering</h3>
            <p className="text-gray-700">Customer-facing app for takeaway orders</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-violet-50 to-purple-100"
  },
  {
    id: 25,
    title: "Conclusion & Demo",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
        <div className="text-8xl mb-4">🎉</div>
        <h1 className="text-7xl font-bold text-indigo-900">Thank You!</h1>
        <div className="space-y-6 text-3xl text-gray-700 max-w-4xl">
          <p className="text-4xl font-bold text-indigo-800">Smart Cafe Management System</p>
          <div className="bg-white p-8 rounded-lg shadow-xl space-y-4">
            <p className="flex items-center justify-center space-x-3">
              <span className="text-4xl">✅</span>
              <span>Affordable & scalable solution for small cafés</span>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <span className="text-4xl">✅</span>
              <span>Modern tech stack with security features</span>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <span className="text-4xl">✅</span>
              <span>Comprehensive features for daily operations</span>
            </p>
            <p className="flex items-center justify-center space-x-3">
              <span className="text-4xl">✅</span>
              <span>Easy to use with minimal training required</span>
            </p>
          </div>
          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg text-white">
            <p className="text-4xl font-bold mb-3">Ready for Live Demo!</p>
            <p className="text-2xl">Questions & Answers</p>
          </div>
        </div>
        <div className="mt-8 text-2xl text-gray-600">
          <p>Presented by: [Your Name]</p>
          <p>B.Tech Computer Science & Engineering</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-100 to-purple-200"
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Slide Container */}
      <div className={`flex-1 ${slides[currentSlide].bg} p-16 overflow-auto`}>
        {slides[currentSlide].content}
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors"
        >
          ← Previous
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-lg">
            Slide {currentSlide + 1} / {slides.length}
          </span>
          <select
            value={currentSlide}
            onChange={(e) => goToSlide(Number(e.target.value))}
            className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 ml-4"
          >
            {slides.map((slide, index) => (
              <option key={slide.id} value={index}>
                {index + 1}. {slide.title}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
