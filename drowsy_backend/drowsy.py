import cv2
import numpy
from matplotlib import pyplot as plt
from scipy.spatial import distance
from imutils import face_utils
import imutils

class drowsy:
    def detectFace(self, image):
        # Read image
        img = cv2.imread(image, cv2.IMREAD_COLOR)
        imagem = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        face_dectector = cv2.CascadeClassifier('/content/haarcascade_frontalface_default.xml')
        faces = face_dectector.detectMultiScale(imagem, scaleFactor=1.2, minSize=(40,40))
        for (x, y, l, a) in faces:
            print(x, y, l, a)
            cv2.rectangle(img, (x, y), (x + l, y + a), (0,255,0), 2)
            
    def drowsyDetect():
        video = cv2.VideoCapture(0)
        face_dectector = cv2.CascadeClassifier('/content/haarcascade_frontalface_default.xml')
        while True:
            ret, frame = video.read()
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = face_dectector.detectMultiScale(
                gray,
                scaleFactor=1.1,
                minNeighbors=5,
                minSize=(30, 30),
                flags=cv2.cv.CV_HAAR_SCALE_IMAGE
            )
            for (x, y, l, a) in faces:
                print(x, y, l, a)
                cv2.rectangle(frame, (x, y), (x + l, y + a), (0,255,0), 2)
            
            cv2.imshow('Video', frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
            
        
        