from flask import Flask, render_template, escape

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/household/welcome')
def household_welcome():
    return render_template('household_map_1.html')

@app.route('/household/welcome/weight')
def household_welcome_weight():
    return render_template('household_map_2.html')

@app.route('/household/welcome/in-transit')
def household_welcome_intransit():
    return render_template('household_map_3.html')
    
if __name__ == "__main__":
    app.run(debug=True)