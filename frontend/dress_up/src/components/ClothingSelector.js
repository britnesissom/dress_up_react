import React from "react";
import ClothingSelectorType from "./ClothingSelectorType";
import "./ClothingSelector.scss";

const ClothingSelector = (props) => {
  const { name, id } = props;

  return (
    <>
      <div className="clothing_selector">
        <ul className="tabs" id={`tabs_${name}`}>
          <li className="tab">
            <a
              className="tablinks active"
              id={`tops_${name}`}
              href={`#tops_content_${name}`}
            >
              Tops
            </a>
          </li>
          <li className="tab">
            <a
              className="tablinks"
              id={`bottoms_${name}`}
              href={`#bottoms_content_${name}`}
            >
              Bottoms
            </a>
          </li>
          <li className="tab">
            <a
              className="tablinks"
              id={`dresses_${name}`}
              href={`#dresses_content_${name}`}
            >
              Dresses
            </a>
          </li>
          <li className="tab">
            <a
              className="tablinks"
              id={`shoes_${name}`}
              href={`#shoes_content_${name}`}
            >
              Shoes
            </a>
          </li>
          <li className="tab">
            <a
              className="tablinks"
              id={`accessories_${name}`}
              href={`#accessories_content_${name}`}
            >
              Accessories
            </a>
          </li>
        </ul>

        <div id={`tops_content_${name}`} className="tabcontent">
          <ClothingSelectorType type="top" id={id} />
        </div>

        <div id={`bottoms_content_${name}`} className="tabcontent">
          <ClothingSelectorType type="bottom" id={id} />
        </div>

        <div id={`dresses_content_${name}`} className="tabcontent">
          <ClothingSelectorType type="dress" id={id} />
        </div>

        <div id={`shoes_content_${name}`} className="tabcontent">
          <ClothingSelectorType type="shoes" id={id} />
        </div>

        <div id={`accessories_content_${name}`} className="tabcontent">
          <ClothingSelectorType type="accessory" id={id} />
        </div>
      </div>
    </>
  );
};

export default ClothingSelector;
