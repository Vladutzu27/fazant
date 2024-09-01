import json

def convert_file_to_json(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
    
    # Extract keys from the first line
    keys = lines[0].split()

    # Create JSON object array
    json_objects = []
    for line in lines[1:]:
        values = line.split()
        print(line)
        json_object = {keys[i]: values[i] for i in range(len(keys))}
        json_objects.append(json_object)

    return json.dumps(json_objects)

# Usage example
filename = '"C:\Users\vladm\OneDrive\Documents\GitHub\fazant\wordlist\lista.txt"'
json_data = convert_file_to_json(filename)
print(json_data)