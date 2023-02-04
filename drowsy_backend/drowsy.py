import os
from pkgutil import get_data
import cv2
import numpy as np
from matplotlib import pyplot as plt
from scipy.spatial import distance
from imutils import face_utils
import imutils
import face_recognition

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
            
    def drowsyDetect(vid):
        print("enter")
        video = cv2.imread(vid, cv2.IMREAD_COLOR)
        face_dectector = cv2.CascadeClassifier('/content/haarcascade_frontalface_default.xml')
        while True:
            print("true")
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
            
            
        # get_data()    
        # video_capture = cv2.VideoCapture(0)
        # ret, frame = video_capture.read()
        # small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        # rgb_small_frame = small_frame[:, :, ::-1]
        # face_locations = face_recognition.face_locations(rgb_small_frame)    
         
        # for (top, right, bottom, left), name in zip(face_locations):
        #     top *= 4                
        #     right *= 4                
        #     bottom *= 4                
        #     left *= 4                
        #     cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)                
        #     cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)                
        # rand_no = np.random.random_sample()
        
        
        # cv2.imwrite(str(rand_no)+".jpg", frame)               
        
        