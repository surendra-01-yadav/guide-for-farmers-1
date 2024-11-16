function getSuggestions() {
    // Get the selected values for soil type and land type
    const soilType = document.getElementById('soilType').value;
    const landType = document.getElementById('landType').value;

    // Element to display the results
    const resultsText = document.getElementById('resultsText');
    const suggestionResults = document.getElementById('suggestionResults');

    // Simple crop suggestions for combinations
    const cropSuggestions = {
        alluvial: ['Wheat', 'Rice', 'Sugarcane'],
        black: ['Cotton', 'Soybean', 'Groundnut'],
        red: ['Millets', 'Tea', 'Coffee'],
        loamy: ['Vegetables', 'Paddy', 'Wheat'],
        sandy: ['Cashew', 'Coconut', 'Watermelon'],
        clay: ['Rice', 'Sugarcane', 'Jute'],
    };

    // Check if both options are selected
    if (!soilType || !landType) {
        alert('Please select both soil type and land type.');
        return;
    }

    // Show suggestions based on soil type
    const suggestions = cropSuggestions[soilType];

    // Display the results
    if (suggestions) {
        resultsText.innerHTML = `For your soil type (${soilType}) and land type (${landType}), recommended crops are: <strong>${suggestions.join(', ')}</strong>.`;
    } else {
        resultsText.innerHTML = 'No suggestions available for the selected options.';
    }

    // Make the results visible
    suggestionResults.classList.remove('hidden');
}
