from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
from zaira import return_name


app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message':'test server response'
    })

if __name__ == "__main__":
    return_name()
    app.run(debug=True, port=8080)
    