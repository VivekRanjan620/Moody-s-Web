import React, { useState } from "react";
import { categories } from "./Array1";
import { items } from "./SectorArray";
import "./LinkedDataComponent.css";

const LinkedDataComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (e) => {
    // setSelectedCategory(categoryId);
    console.log(e);
  };

  return (
    <div className="container">
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`category-item ${
              selectedCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>

      {/* {selectedCategory && (
        <div className="item-list">
          <h2>
            Items in{" "}
            {categories.find((cat) => cat.id === selectedCategory).name}
          </h2>
          <ul>
            {items[selectedCategory].map((item) => (
              <li key={item.id} className="item">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default LinkedDataComponent;
