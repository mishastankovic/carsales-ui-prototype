import { BsFuelPump } from "react-icons/bs";
import DynamicIcon from "./dynamic-icon";
import { IconType } from "react-icons/lib";
import clsx from "clsx";

interface SelectProps {
    id?: string;
    items: Record<string, string>;
    prompt?: string;
    styles?: string;
    prefix?: string;
    prefixIcon?: IconType;
    prefixStylesOverride?: string;

}

const Select = ({id, items, prompt, styles, prefix, prefixIcon, prefixStylesOverride}: SelectProps) => {

    const baseStyles = "peer block w-full cursor-pointer border-gray-300 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
    const selectBorder = (prefix || prefixIcon) ? 'rounded-e-md' : 'border rounded-md';
    const basePrefixStyles = 'min-w-10 p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-s-md';
    const IconComponent = prefixIcon
    const selectStyles = (baseStyles + ' ' + selectBorder);
    const mainStyles = styles ? clsx(selectStyles, styles) : selectStyles
    const prefixStyles = prefixStylesOverride ? clsx(basePrefixStyles, prefixStylesOverride) : basePrefixStyles

    return (
        <div className="flex flex-row">
            {prefix && <span className={prefixStyles}>{prefix}</span>}
            {IconComponent && <span className={prefixStyles}><IconComponent /></span>}
            <select
            id={id}
            name={id}
            className={mainStyles}
            defaultValue=""
            >
                <option value="" disabled>
                    {prompt}
                </option>
                {Object.entries(items)?.map((item) => (
                <option key={item[0]} value={item[1]}>
                    {item[1]}
                </option>
                ))}
            </select>
      </div>        
    );
};

export default Select;

