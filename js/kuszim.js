// Function to parse the input and calculate the value
function calculateConversion(input) {
    let result = '';
    const numeralPattern = /(\d+)(N\d{2})/g;
    let numerals = [];
    let total = 0;

    // Parse all numerals in the input
    while (match = numeralPattern.exec(input)) {
        numerals.push({amount: parseInt(match[1]), sign: match[2]});
    }

    // Find which system contains all the numerals
    let validSystems = findValidSystems(numerals);
    if (validSystems.length === 0) {
        result = "not a valid numeral.";
    } else {
        validSystems.forEach(system => {
            let systemTotal = 0;
            numerals.forEach(numeral => {
                if (system.values[numeral.sign]) {
                    systemTotal += numeral.amount * system.values[numeral.sign];
                }
            });
            result += `
                <div class = "kuszimResult">
                    <p>
                        <strong>${system.system}</strong><br>
                        ${system.description}
                    </p>
                    <p>
                        ${getConversionText(system, systemTotal)}
                    </p>
                </div>
                `
        });
    }
    
    return result;
}

// Function to check which systems contain all the required numerals
function findValidSystems(numerals) {
    return conversions.filter(system => {
        return numerals.every(numeral => system.values.hasOwnProperty(numeral.sign));
    });
}

// Function to generate the conversion result based on system type
function getConversionText(system, systemTotal) {
    let conversionText = '';
    
    // Check the system type and apply the corresponding conversion
    system.types.forEach(type => {
        let typeConversionText = '';
        
        switch (type) {
            case 'things':
                typeConversionText += 
                    `${systemTotal} items`
                break;

            case 'area':
                typeConversionText += 
                    `${systemTotal} iku
                     ${(systemTotal / 3).toFixed(1)} ha`
                break;

            case 'volume':
                typeConversionText += 
                    `${systemTotal} sila<br>
                     ${systemTotal * 0.8} liters`;
                break;
            case 'cereal':
                typeConversionText += 
                    `ca. ${Math.round(systemTotal * 0.8 * 0.6)} kg<br>
                     ca. ${Math.round(systemTotal / 30)} workers' monthly rations`;
                break;

            case 'barley':
                typeConversionText += `needs ca. ${(systemTotal * 0.8 * 0.6 / 600).toFixed(2)} ha (or ${(systemTotal * 0.8 * 0.6 / 200).toFixed(2)} iku) to grow`;
                break;
            
            default:
                typeConversionText += `no conversion available`;
                break;
        }

        conversionText += `<p>${typeConversionText}</p>`;
    });
    
    return conversionText;
}

document.getElementById('query').addEventListener('keydown', function(event) {
    const input = this.value.trim();
    if (event.key === "Enter" && input) {
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').innerHTML = calculateConversion(input);
    }
});

