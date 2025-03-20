interface SearchParameterProps {
    value: string;
    property: string;
    idx?: number;
    handleParameterCancel: (property: string, index?: number) => void;
}

export default function SearchParameter({value, property, idx, handleParameterCancel}: SearchParameterProps) {

    const id = property + idx;

    return (
        <div key={id} className="bg-gray-200 pl-2 pr-2 min-w-4 rounded-sm flex flex-row align-top">
            <span>{value}</span><span className='flex align-top ml-2 cursor-pointer text-sm ' onClick={() => handleParameterCancel(property, idx)}>x</span>
        </div>
    )

}