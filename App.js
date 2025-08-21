
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <header className="bg-orange-600 text-white p-6">
        <h1 className="text-3xl font-bold">राम जानकी मंदिर</h1>
        <p className="text-lg">शांति, भक्ति और आस्था का पवित्र स्थान</p>
      </header>

      <section className="relative">
        <img src="/images/temple2.jpg" alt="Mandir Banner" className="w-full h-[400px] object-cover" />
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl text-white font-bold drop-shadow-lg">
          जय श्री राम 🚩
        </h2>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">मंदिर दर्शन</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/images/temple1.jpg" alt="Temple View 1" className="rounded-lg shadow" />
          <img src="/images/temple2.jpg" alt="Temple View 2" className="rounded-lg shadow" />
          <img src="/images/temple3.jpg" alt="Temple View 3" className="rounded-lg shadow" />
          <img src="/images/temple4.jpg" alt="Temple View 4" className="rounded-lg shadow" />
        </div>
      </section>

      <section className="bg-yellow-100 p-6">
        <h2 className="text-2xl font-bold mb-2">संपर्क करें</h2>
        <p className="text-lg">अध्यक्ष: <strong>श्री हरीश तिवारी</strong></p>
        <p className="text-lg">मोबाइल: <a href="tel:9005169110" className="text-blue-600">9005169110</a></p>
      </section>

      <footer className="bg-gray-800 text-white p-4 mt-4">
        <p>© 2025 राम जानकी मंदिर | सभी अधिकार सुरक्षित</p>
      </footer>
    </div>
  );
}
