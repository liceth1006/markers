import PropTypes from "prop-types";


function SelectCategory({filter,selectCategory}) {

  const categories = []
  return (
    <div className="flex justify-end items-center">
           <label className="block text-sm text-gray-600 mr-2">
             Select Category
           </label>
           <select
             className="rounded-l-lg p-2 border w-full lg:w-auto"
             aria-label="Select category"
             value={filter}
             onChange={selectCategory}
           >
             <option value="">All Categories</option>
             {categories.map((item) => (
               <option key={item.category_id} value={item.category_id}>
                 {item.name}
               </option>
             ))}
           </select>
         </div>
  );
}
SelectCategory.propTypes={
  filter: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
}

export default SelectCategory;
