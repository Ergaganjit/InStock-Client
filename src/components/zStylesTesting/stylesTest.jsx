import React from 'react';
import './stylesTest.scss'
import textIcon from '../../assets/Icons/chevron_right-24px.svg';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import DeleteWarehouseModal from '../../components/DeleteWarehouseModal/DeleteWarehouseModal';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Styles = () => {
  return (
    <div>
      <h1>Styling Dashboard</h1>
      <p>Welcome to the styling testing system.</p>

      <div className='new-category'>
        <h3>Buttons:</h3>
      
        <div className='new-item'>
        <p>Primary Button:</p>
          <button className="button button--primary">
            + Add Item
          </button>
        </div>

        <div className='new-item'>
        <p>Secondary Button:</p>
          <button className="button button--secondary">
            Cancel
          </button>
        </div>

        <div className='new-item'>
        <p>Delete Button:</p>
          <button className="button button--delete">
            Delete
          </button>
        </div>

        <div className='new-item'>
        <p>Text link:</p>
          <a href="#" className="text-link">
            Manhattan
            <img src={textIcon} alt="Text icon" className="text-link-icon" />
          </a>
        </div>
      </div>

    <div className='new-category'>
        <h3>Layout:</h3>

        <div className='new-item'>
        <p>Component Padding:
          - mobile 16px margin left + right 
          - tablet: 32px margin left + right
          - desktop: max width 1020, auto margin left + right
        </p>


    </div>
    </div>
    

  </div>
  );
};

export default Styles;