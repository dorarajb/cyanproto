'''
Created on 09-Sep-2012

@author: doraraj
'''
from django.http import HttpResponse
from django.shortcuts import render_to_response, render
from django.template import RequestContext, loader
from django.template.context import RequestContext, Context
from django.utils import simplejson
from urllib2 import URLError, urlopen

def index(request):
    template = 'index.html'
    return render_to_response(template, {'message':'index view'}, context_instance = RequestContext(request, processors=[custom_proc]))

def custom_proc(request):
    j_data1 = j_data2 = ""
    try: j_data1 = urlopen('http://pub-bb3.dev.cyaninc.com:8011/json/builders/buildmasterUpdater/builds/_all?as_text=1')
    except URLError, e:
        print e
    jsondata1 = simplejson.loads(j_data1.read())
    jsondict1 = {}
    for key in jsondata1.keys():
        jsondict1[key] = jsondata1[key]["times"][1]
        
    try: j_data2 = urlopen('http://pub-bb3.dev.cyaninc.com:8011/json/builders/cytestBuildSlaveUpdate/builds/_all?as_text=1')
    except URLError, e:
        print e
    jsondata2 = simplejson.loads(j_data2.read())
    jsondict2 = {}
    for key in jsondata2.keys():
        jsondict2[key] = jsondata2[key]["times"][1]
    
    return {'jd1' : jsondict1, 'jd2' : jsondict2 }

