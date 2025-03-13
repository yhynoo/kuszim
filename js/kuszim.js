// Function to parse the input and calculate the value
function calculateConversion(input) {
    let result = '';
    const numeralPattern = /(\d+)(N\d{2})(?:\s*(DUG~b|DUG~c|KU3~a|SILA3~a|UKKIN~b\+NI~a))?/g;
    let numerals = [];

    input = input.replace(/[()?#,]/g, '').replace(/\s+/g, ' ').trim();

    // Parse all numerals in the input
    let match;
    while ((match = numeralPattern.exec(input)) !== null) {
        let sign = match[2];  // Base numeral (e.g., N01)
        if (match[3]) sign += ' ' + match[3]; // Append extra word if present

        numerals.push({ amount: parseInt(match[1]), sign });
    }

    // Process numerals using your existing system logic
    let validSystems = findValidSystems(numerals);
    if (validSystems.length === 0) {
        result = "No valid system found for the given numerals.";
    } else {
        validSystems.forEach(system => {
            let systemTotal = numerals.reduce((sum, numeral) => 
                sum + (system.values[numeral.sign] || 0) * numeral.amount, 0);
            
            result += `
                <div class="kuszimResult">
                    <p><strong>${system.system}</strong><br>${system.description}</p>
                    <p>${getConversionText(system, systemTotal)}</p>
                </div>
            `;
        });
    }

    return result;
}

function findValidSystems(numerals) {
    // Find valid systems excluding "še (mixed)"
    const validSystems = conversions.filter(system => 
        system.system !== "še (mixed)" && numerals.every(numeral => system.values.hasOwnProperty(numeral.sign))
    );

    // If no systems are valid, check for "še (mixed)"
    if (validSystems.length === 0) {
        const mixedSystem = conversions.find(system => system.system === 'še (mixed)' && 
            numerals.every(numeral => system.values.hasOwnProperty(numeral.sign))
        );
        return mixedSystem ? [mixedSystem] : [];
    }

    return validSystems;
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
                    `${systemTotal} item(s)`
                break;

            case 'area':
                typeConversionText += 
                    `${systemTotal} iku<br>
                     ${(systemTotal * 0.36).toFixed(2)} ha<br>
                     enough to grow ${(systemTotal * 12)} monthly workers' rations or ca. ${(systemTotal * 360 * 0.6)} kg of barley`
                break;

            case 'volume':
                typeConversionText += 
                    `${systemTotal} bowls<br>
                     ca. ${Math.round(systemTotal * 0.83)} liters`;
                break;
            case 'cereal':
                typeConversionText += 
                    `ca. ${Math.round(systemTotal * 0.83 * 0.6)} kg`;
                break;

            case 'barley':
                typeConversionText += `
                    ca. ${Math.round(systemTotal / 30)} monthly workers' rations<br>
                    needs ca. ${(systemTotal / 360).toFixed(2)} iku (or ${(systemTotal / 360 * 0.36).toFixed(2)} ha) to grow`;
                break;
            
            case 'dairy':
                typeConversionText += `
                    ${systemTotal} bowls<br>
                    ca. ${(systemTotal * 0.83).toFixed(2)} liters<br>
                    needs a herd of ${Math.max(1, Math.round(systemTotal * 0.83 / 4))} to ${Math.max(1, Math.round(systemTotal * 0.83 / 2))} cows to produce in a year
                `
                break;

            default:
                typeConversionText += `${systemTotal}, no conversion available`;
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

