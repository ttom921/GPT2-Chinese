import argparse
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

from twgenerate import gettext

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    # gettext()
    return 'hello!!'


@app.route('/v0.1', methods=['GET'])
def index2():
    # gettext()
    result = 'v0.1===hello!!'
    return jsonify({'return': str(result)})


@app.route('/v0.1/genparaph', methods=['POST'])
def genparaph():
    # 取得前端傳過來的數值
    # print(request.json)
    # request.json
    postdata = json.loads(request.data)
    # print(postdata)
    prefix = postdata['prefix']
    # print(f"param {prefix}")
    length = postdata['length']
    nsamples = postdata['nsamples']
    temperature = 1.0
    # paramValues = request.get_json()
    # print(f"paramValues {paramValues}")
    # prefix = paramValues['prefix']
    # print(f"param {prefix}")
    result = gettext(prefix, length, temperature, nsamples)
    return json.dumps(result)
    # return jsonify({'return': str(result)})

# @app.route('/predict', methods=['POST'])
# def postInput():
#     # 取得前端傳過來的數值
#     insertValues = request.get_json()
#     x1=insertValues['sepalLengthCm']
#     x2=insertValues['sepalWidthCm']
#     x3=insertValues['petalLengthCm']
#     x4=insertValues['petalWidthCm']
#     input = np.array([[x1, x2, x3, x4]])

#     result = model.predict(input)

#     return jsonify({'return': str(result)})


if __name__ == '__main__':
    # # Parse the command - line arguments
    # parser = argparse.ArgumentParser(description='Application server')
    # parser.add_argument(
    #     '-e',
    #     '--env',
    #     choices=['dev', 'local', 'prod'],
    #     default='local',
    #     dest='env',
    #     required=False
    # )
    # args = parser.parse_args()
    # print("-----------------")
    # print(args)
    # print("-----------------")
    app.run(host='0.0.0.0', port=3000, debug=True)
