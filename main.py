from flask import Flask, request, render_template
app = Flask(__name__)


@app.route("/")
def home():
    return "<h2>hello</h2>"
