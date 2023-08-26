from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Load intents data from JSON file
with open('intents.json', 'r') as file:
    intents_data = json.load(file)['ourIntents']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form.get('user_input')
    
    # Find the intent that matches the user input
    intent = find_matching_intent(user_input)
    
    if intent:
        bot_response = intent['completion'][0]
    else:
        bot_response = "I'm sorry, I'm not sure how to respond to that."
    
    return jsonify({'bot_response': bot_response})

def find_matching_intent(user_input):
    for intent in intents_data:
        for prompt in intent['prompt']:
            if prompt.lower() in user_input.lower():
                return intent
    return None

if __name__ == '__main__':
    app.run(debug=True)
