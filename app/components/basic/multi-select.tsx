import React, { useState, useRef, useEffect } from "react";
import {Option} from "../backend/dataService";
import { PiCaretDownBold } from "react-icons/pi";
import { IconType } from "react-icons/lib";
import clsx from "clsx";

interface MultiSelectProps {
    id?: string;
    multiselect?: boolean;
    options: Option[];
    prompt?: string;
    prefix?: string;
    prefixIcon?: IconType;
    prefixStylesOverride?: string;    
    selected?: string[];
    onChange?: (selectedOptions: Option[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ id, multiselect=false, options, prompt, prefix, prefixIcon, prefixStylesOverride, selected, onChange }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightIndex, setHighlightIndex] = useState<number>(-1);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<(HTMLLabelElement | null)[]>([]);

    const mainStyles = "w-80 cursor-pointer flex justify-between items-center bg-white text-sm border border-gray-300 focus:border-blue-600 focus:border-2 ";
    const mainBorder = (prefix || prefixIcon) ? 'rounded-e-md' : 'border rounded-md';    
    const dropdownStyles = "absolute border rounded bg-white w-full mt-1 p-2 shadow-md max-h-60 overflow-y-auto z-50";
    const searchInputStyles = "w-full p-1 mb-1 border rounded  border-gray-200 text-sm";
    const basePrefixStyles = 'min-w-10 p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-s-md';
    const prefixStyles = prefixStylesOverride ? clsx(basePrefixStyles, prefixStylesOverride) : basePrefixStyles;
    const checkboxStyles = "mr-2 border-gray-300 rounded-sm";
    const IconComponent = prefixIcon
    const searchRequired = options?.length > 5

    let existingSelected = [] as Option[]
    if (selected && selected?.length > 0) {
      console.log("processing selection " + selected);
      options.map((option) => {
        if (selected?.some((value) => option.value == value)) {
          console.log("pushing option " + JSON.stringify(option))
          existingSelected.push(option);
        }
      });
    }

    const [selectedOptions, setSelectedOptions] = useState<Option[]>(existingSelected);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus on input when dropdown opens
    useEffect(() => {
      if (isOpen && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isOpen]);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
    
  
    const handleOptionClick = (option: Option) => {
      const isSelected = selectedOptions.some((item) => item.value === option.value);
      let newSelectedOptions: Option[];
      if (isSelected && multiselect) {
        newSelectedOptions = selectedOptions.filter((item) => item.value !== option.value);
      } else {
        newSelectedOptions = multiselect ? [...selectedOptions, option] : [option];
      }
      if (!multiselect) setIsOpen(false);
      setSelectedOptions(newSelectedOptions);
      if (onChange) onChange(newSelectedOptions);
    };
  
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setHighlightIndex((prev) => {
          const nextIndex = prev < filteredOptions.length - 1 ? prev + 1 : prev;
          optionsRef.current[nextIndex]?.scrollIntoView({ block: "nearest" });
          return nextIndex;
        });
      } else if (event.key === "ArrowUp") {
        setHighlightIndex((prev) => {
          const nextIndex = prev > 0 ? prev - 1 : prev;
          optionsRef.current[nextIndex]?.scrollIntoView({ block: "nearest" });
          return nextIndex;
        });
      } else if (event.key === "Enter" && highlightIndex >= 0) {
        handleOptionClick(filteredOptions[highlightIndex]);
      }
    };

    const clearSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("In clearSelection");
      setSelectedOptions([] as Option[]);
      setIsOpen(false);
      if (onChange) onChange([] as Option[]);
      event.stopPropagation();
    }
  
    // Renderer
    return (
      <div className="relative w-full flex flex-row" ref={dropdownRef}>
        {prefix && <span className={prefixStyles + ' text-sm'}>{prefix}</span>}
        {IconComponent && <span className={prefixStyles + ' text-2xl'}><IconComponent /></span>}
        <div
          className={mainStyles + mainBorder}
          onClick={toggleDropdown}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <span className={`flex items-center h-full w-full pl-10 whitespace-pre-line ${selectedOptions.length > 0 ? 'text-xs bg-blue-50' : ''}`}>
            {selectedOptions.length > 0
              ? selectedOptions.map((option) => option.label).join(",\n")
              : prompt}
          </span>
          {selectedOptions.length > 0 && <span className='flex items-center pr-2 bg-blue-50 h-full text-gray-600' 
            onClick={clearSelection}>{'\u2715'}</span>}
          <span className="flex items-center text-sm border-l border-gray-300 h-full p-2"><PiCaretDownBold /></span>
        </div>
        {isOpen && (
          <div className={dropdownStyles + ' mt-11 text-xs'}>
            {searchRequired && 
            <input
              type='text'
              className={searchInputStyles}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={searchInputRef}
            />
            }
            <div>
              {filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  ref={(el) => (optionsRef.current[index] = el)}
                  className={`flex items-center p-1 cursor-pointer ${highlightIndex === index ? 'bg-gray-200' : ''}`}
                  onMouseEnter={() => setHighlightIndex(index)}
                  onClick={() => handleOptionClick(option)}
                >
                  {multiselect && <input
                    type="checkbox"
                    checked={selectedOptions.some((item) => item.value === option.value)}
                    onChange={() => handleOptionClick(option)}
                    className={checkboxStyles}
                  />}
                  {option.icon && <img src={option.icon} alt="icon" className="w-5 h-3 mr-2" />}
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MultiSelect;
  