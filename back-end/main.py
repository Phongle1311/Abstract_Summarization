# from flask import Flask, request, jsonify
# from transformers import pipeline

# app = Flask(__name__)
# summarizer = pipeline(
#     "summarization", model="Phongle1311/my_awesome_billsum_model")


# @app.route('/api/summarize', methods=['POST'])
# def summarize():
#     data = request.get_json()
#     text = data['text']
#     summary = summarizer(text)
#     return jsonify({'summary': summary[0]['summary_text']})


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, render_template
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")
