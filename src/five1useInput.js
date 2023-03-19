import {useState} from 'react';
//allowed to use hooks inside of other hooks, or in components

export function useInput(initialValue){
    const [value,setValue] = useState(
        initialValue
        );
        return [
            {value, onChange: (e) => setValue(e.target.value)},
            () => setValue(initialValue)
        ]
}
