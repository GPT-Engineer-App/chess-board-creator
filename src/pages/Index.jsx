import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] bg-green-100 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80%] h-[80%] border border-black rounded-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[50%] h-[50%] border border-black rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[100%] h-[100%] border border-black rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[100%] h-[100%]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full border-l border-black"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-full border-t border-black"></div>
              </div>
            </div>
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-[20%] left-[35%] transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-[20%] right-[35%] transform translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-[35%] left-[20%] transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-[35%] right-[20%] transform translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[20%] left-[35%] transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[20%] right-[35%] transform translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[35%] left-[20%] transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-[35%] right-[20%] transform translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;