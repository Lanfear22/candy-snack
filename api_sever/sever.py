#!flask/bin/python
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def creat_newQuery():
    if not request.json:
        abort(400)
    newQuery = request.json()
    return jsonify(newQuery), 200

if __name__ == '__main__':
    app.run(debug=True)
