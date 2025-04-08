'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt, FaSave, FaMagic, FaHistory } from 'react-icons/fa';
import Image from 'next/image';

// Define a type for history items
interface HistoryItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  price: string;
}

const Dashboard = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [metaTypes, setMetaTypes] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [suggestedPrice, setSuggestedPrice] = useState('');
  
  const [history] = useState<HistoryItem[]>([
    {
      id: '1',
      title: 'Vintage Wooden Clock',
      date: '2023-06-15',
      imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$29.99'
    },
    {
      id: '2',
      title: 'Handmade Ceramic Vase',
      date: '2023-06-10',
      imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: '$24.99'
    },
  ]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

  const handleSave = () => {
    // Save logic here
    console.log({
      title,
      description,
      metaTypes,
      metaDescription,
      suggestedPrice,
      files
    });
  };

  const handleGenerate = () => {
    // Generate AI suggestions logic here
    console.log('Generating AI suggestions...');
  };

  return (
    <div className="flex flex-col h-full p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Listing</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Input Fields */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter product title"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[150px]"
              placeholder="Enter product description"
            />
          </div>

          {/* Meta Types */}
          <div>
            <label htmlFor="metaTypes" className="block text-sm font-medium text-gray-700 mb-1">
              Meta Types
            </label>
            <textarea
              id="metaTypes"
              value={metaTypes}
              onChange={(e) => setMetaTypes(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
              placeholder="Enter meta types (comma separated)"
            />
          </div>

          {/* Meta Description */}
          <div>
            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
              placeholder="Enter meta description"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaSave />
            Save Listing
          </button>
        </div>

        {/* Right Side - Image Upload and Price Suggestion */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Image Upload */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'
            }`}
          >
            <input {...getInputProps()} />
            {preview ? (
              <div className="space-y-4">
                <div className="relative w-full h-48">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600">Click or drag to replace</p>
              </div>
            ) : (
              <div className="space-y-4">
                <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto" />
                <div>
                  <p className="text-sm text-gray-600">
                    {isDragActive ? 'Drop the image here' : 'Drag & drop an image here, or click to select'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Price Suggestion Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggested Price</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Market Average:</span>
                <span className="font-semibold text-gray-800">$24.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Competitor Range:</span>
                <span className="font-semibold text-gray-800">$19.99 - $29.99</span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <label htmlFor="suggestedPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Price
                </label>
                <input
                  id="suggestedPrice"
                  type="text"
                  value={suggestedPrice}
                  onChange={(e) => setSuggestedPrice(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your price"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <FaMagic />
            Generate
          </button>
        </div>
      </div>
      
      {/* History Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <FaHistory className="text-orange-500" />
          Previous Generated History
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 relative">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-orange-500">{item.price}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
