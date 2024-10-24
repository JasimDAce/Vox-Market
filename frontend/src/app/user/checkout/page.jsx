'use client'
import React, { useState, useEffect } from 'react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

const deliveryStages = [
  { name: 'Order Placed', icon: Package, description: 'Your order has been received and is being processed.' },
  { name: 'Processing', icon: CheckCircle, description: 'We re preparing your items for shipment.' },
  { name: 'Shipped', icon: Truck, description: 'Your package is on its way to you.' },
  { name: 'Delivered', icon: Home, description: 'Your package has been delivered to the destination address.' },
];

const VerticalDeliveryTimeline = ({ currentStage = 0 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentStage / (deliveryStages.length - 1)) * 100);
  }, [currentStage]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Delivery Status</h2>
      <div className="relative">
        <div
          className="absolute top-0 left-6 w-1 h-full bg-gray-200 transform -translate-x-1/2"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-6 w-1 bg-blue-500 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
          style={{ height: `${progress}%` }}
          aria-hidden="true"
        />
        <ul className="relative z-10 space-y-8">
          {deliveryStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index <= currentStage;
            const isCompleted = index < currentStage;
            return (
              <li key={stage.name} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3
                    className={`text-lg font-semibold ${
                      isActive ? 'text-blue-500' : 'text-gray-400'
                    } transition-all duration-300 ease-in-out`}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      isCompleted ? 'text-gray-600' : 'text-gray-400'
                    } transition-all duration-300 ease-in-out`}
                  >
                    {stage.description}
                  </p>
                  {isCompleted && (
                    <p className="mt-1 text-xs text-green-500">Completed on June {10 + index}, 2023</p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-8 text-center text-gray-600">
        Estimated delivery: <span className="font-semibold">June 15, 2023</span>
      </div>
    </div>
  );
};

export default VerticalDeliveryTimeline;