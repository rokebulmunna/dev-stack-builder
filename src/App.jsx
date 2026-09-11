import { useState, useEffect, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech) => {
    const exists = stack.find((item) => item.id === tech.id);

    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  const handleRemove = (id) => {
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);
    toast.info('Item removed from stack');
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all items from stack');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" />
      <Navbar />
      <Hero />
      

      <div className="max-w-7xl mx-auto px-10 py-12 flex gap-8">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-2">
            Explore the <span className="text-[#DE277F]">Technologies</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Pick one technology per category to build your ideal stack.
          </p>

          <Suspense fallback={<div className="text-center py-20 font-semibold text-gray-500">Loading technologies...</div>}>
            <div className="grid grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAddToStack={handleAddToStack}
                    isAdded={isAdded}
                  />
                );
              })}
            </div>
          </Suspense>
        </div>

        <div className="w-1/4">
          <Sidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;