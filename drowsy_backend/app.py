import os
import time
import numpy
import cv2
import pathlib
from flask import Flask, Response, render_template, request, flash, redirect
from werkzeug.utils import secure_filename
from PIL import Image

from drowsy import drowsy

app = Flask(__name__)

@app.route("/")
def facial_rec():
    return Response(drowsy.drowsyDetect, mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run("localhost", 6969)