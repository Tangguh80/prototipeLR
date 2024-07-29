import base64

# Path to the SVG file
svg_file_path = 'C:\web-saya3\LogicRobotic\Loading\mouse LR.svg'

# Read the SVG file and encode it to base64
with open(svg_file_path, 'rb') as svg_file:
    svg_base64 = base64.b64encode(svg_file.read()).decode('utf-8')

# Create the Data URI
data_uri = f"data:image/svg+xml;base64,{svg_base64}"

# Print the Data URI
print(data_uri)
