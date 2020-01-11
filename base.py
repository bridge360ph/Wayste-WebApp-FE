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
    return render_template('household_welcome.html')
