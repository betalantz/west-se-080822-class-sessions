import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {
  const categoryButtons = categories.map(cat => (
    <button
      key={cat}
      onClick={() => onSelectCategory(cat)}
      className={selectedCategory === cat ? "selected" : ""}
      >
        {cat}
    </button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
