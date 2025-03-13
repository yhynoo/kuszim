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

    // cerals
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
        "types": ["volume"]
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
        "types": ["volume", "cereal"]
    }
]