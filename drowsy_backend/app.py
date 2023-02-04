import os
import time
import numpy
import cv2
import pathlib
from flask import Flask, Response, render_template, request, flash, redirect
from werkzeug.utils import secure_filename
from PIL import Image
from flask_cors import CORS, cross_origin

from drowsy import drowsy

app = Flask(__name__)

@app.route("/")
def facial_rec():
    return Response(drowsy.drowsyDetect, mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/image", methods=['GET', 'POST'])
def image():
    if(request.method == "POST"):
        bytesOfImage = request.get_data()
        with open('image.jpeg', 'wb') as out:
            out.write(bytesOfImage)
        return "Image read"


@app.route("/video", methods=['GET', 'POST'])
def video():
    if(request.method == "POST"):
        bytesOfVideo = request.get_data()
        with open('video.mp4', 'wb') as out:
            out.write(bytesOfVideo)
        return "Video read"


# if __name__ == "__main__":
#     app.run("172.26.29.33")