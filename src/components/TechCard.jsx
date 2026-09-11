const TechCard = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
      <div>
        
        <div className="flex justify-between items-center mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
          <span className="text-xs px-3 py-1 bg-cyan-50 text-cyan-600 font-medium rounded-full">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <div>
      
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="text-amber-500 font-bold">★ {tech.rating}</span>
        </div>

        
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg font-semibold transition ${
            isAdded
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#0F172A] text-white hover:bg-black'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;