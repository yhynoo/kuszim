conversions = [
    // basic
    {
        "system": "sexagesimal",
        "description": "used to count individual objects, animals, and humans",
        "values": {
            "N08": 0.5,
            "N01": 1,
            "N14": 10,
            "N34": 60,
            "N48": 600,
            "N45": 3600,
            "N50": 36000
        },
        "types": ["things"] 
    },
    {
        "system": "sexagesimal'",
        "description": "used to count dead animals",
        "values": {
            "N02": 1,
            "N15": 10,
            "N35": 60
        },
        "types": ["things"]
    },
    
    // area
    {
        "system": "gan2",
        "description": "used to measure field areas",
        "values": {
            "N08": 0.5,
            "N01": 1,
            "N22": 6,
            "N14": 18,
            "N50": 180,
            "N45": 1080
        },
        "types": ["area"]
    },

    // EN system
    {
        "system": "en",
        "description": "uruk iv only, uncertain; equivalences of N09 - N12 are unknown; here 0 is used",
        "values": {
            "N09": 0,
            "N10": 0,
            "N11": 0,
            "N12": 0,
            "N07": 0.0625,
            "N08": 0.25,
            "N24": 0.5,
            "N01": 1,
            "N14": 10,
        },
        "types": ["unknown"]
    },

    // cereals
    {
        "system": "še",
        "description": "used to measure barley or total volumes of cereals",
        "values": {
            "N30c": 0.6,
            "N30a": 1,
            "N29": 1.2,
            "N28": 1.5,
            "N26": 2,
            "N24": 3,
            "N39": 6,
            "N01": 30,
            "N14": 180,
            "N45": 1800,
            "N34": 5400,
            "N48": 54000
        },
        "types": ["volume", "cereal", "barley"]
    },
    {
        "system": "še'", 
        "description": "used to measure malt",
        "values": {
            "N24": 3,
            "N40": 6,
            "N03": 30,
            "N18": 180,
            "N45": 1800
        },
        "types": ["volume", "malt"]
    },
    {
        "system": "še\"", 
        "description": "used to measure cereals, likely emmer",
        "values": {
            "N41": 6,
            "N04": 30,
            "N19": 180,
            "N46": 1800,
            "N36": 5400,
            "N49": 54000
        },
        "types": ["volume", "cereal"]
    },
    {
        "system": "še*", 
        "description": "used to measure groats",
        "values": {
            "N28": 1.5,
            "N27": 2,
            "N25": 3,
            "N42": 6,
            "N05": 30,
            "N20": 180,
            "N47": 1800,
            "N37": 5400
        },
        "types": ["volume", "cereal", "groats"]
    },
    {
        "system": "še (mixed)",
        "description": "used in some contexts to measure totals of mixed kinds of cereals",
        "values": {
            "N30~c": 0.6,
            "N30~a": 1,
            "N29": 1.2,
            "N28": 1.5,
            "N26": 2,
            "N27": 2,           // groats
            "N24": 3,
            "N25": 3,           // groats
            "N39": 6,
            "N41": 6,           // double stroke
            "N42": 6,           // groats
            "N01": 30,
            "N04": 30,          // double stroke
            "N05": 30,          // groats
            "N14": 180,
            "N19": 180,         // double stroke
            "N20": 180,         // groats
            "N45": 1800,
            "N46": 1800,        // double stroke
            "N47": 1800,        // groats
            "N34": 5400,
            "N36": 5400,        // double stroke
            "N37": 5400,        // groats
            "N48": 54000,
            "N49": 54000        // double stroke   
        },
        "types": ["volume", "cereal"]
    },

    // DUG
    {
        "system": "archaic dairy?", 
        "description": "uruk iv; uncertain if really used for dairy fats",
        "values": {
            "N02": 0.5,
            "N01": 1,
            "N14": 10
        },
        "types": ["dairy"]
    },
    {
        "system": "dug~b", 
        "description": "uruk iii only; dairy fats",
        "values": {
            "N01 SILA3~a": 1,
            "N01 DUG~b": 10
        },
        "types": ["dairy"]
    },
    {
        "system": "dug~c", 
        "description": "uruk iii only; dairy fats",
        "values": {
            "N02": 1,
            "N01 KU3~a": 5,
            "N01 DUG~c": 10,
            "N01 UKKIN~b+NI~a": 10,
            "N14": 100,
            "N14 DUG~c": 100,
            "N14 UKKIN~b+NI~a": 100,
        },
        "types": ["dairy"]
    }
]