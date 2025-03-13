// Function to parse the input and calculate the value
function calculateConversion(input) {

    let result = '';
    const numeralPattern = /(\d+)(N\d{2})/g;
    let numerals = [];

    input = input.replace(/[()?#!]/g, '')

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
                    `${systemTotal} items`
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
            
            default:
                typeConversionText += `${systemTotal} no conversion available`;
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

