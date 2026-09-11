const Sidebar = ({ stack, onRemove, onRemoveAll }) => {
    return (
     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
      <h3 className="text-xl font-bold">Your Stack</h3>  
      <p className="text-xs text-gray-400 mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
      </p>
      {stack.length === 0 ? (
      <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
     ) : (
      <div className="flex flex-col gap-3">
         {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <div>
                  <p className="font-semibold text-sm leading-none">{item.name}</p>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
            <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold text-sm px-1"
              >
                ✕
              </button>
            </div>
          ))}
               <button
            onClick={onRemoveAll}
            className="mt-4 w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg text-sm font-semibold"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;