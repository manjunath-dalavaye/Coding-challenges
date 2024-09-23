import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>(''); // State to store selected color

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(event.target.value); // Update the selected color based on user input
    };

    return (
        <div>
            <h2>Color Picker</h2>
            <select onChange={handleColorChange} value={selectedColor}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
            </select>

            {/* Box with dynamic background color */}
            <div
                style={{
                    marginTop: '20px',
                    width: '200px',
                    height: '200px',
                    backgroundColor: selectedColor || 'lightgray', // Default to lightgray if no color is selected
                    border: '1px solid #ccc',
                    textAlign: 'center',
                    lineHeight: '200px',
                    color: 'white',
                    fontWeight: 'bold'
                }}
            >
                {selectedColor ? selectedColor.toUpperCase() : 'Pick a color'}
            </div>
        </div>
    );
};

export default ColorPicker;
