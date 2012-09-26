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
import time
from datetime import date

def index(request):
    template = 'index.html'
    return render_to_response(template, {}, context_instance = RequestContext(request, processors=[custom_proc]))

def custom_proc(request):
    j_data1 = j_data2 = j_data3  = ""
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
    
#    try: j_data3 = urlopen('http://pub-bb3.dev.cyaninc.com:8011/json?select=builders/buildmasterUpdater/&as_text=1')
#    except URLError, e:
#        print e
#    jsondata3 = simplejson.loads(j_data3.read())
##    print jsondata3
#    builds_dict = {}
#    for key1, dict1 in jsondata3.iteritems():
#        for key2, dict2 in dict1.iteritems():
#            builds_dict = dict2
#        
##    jsondict3 = {}
#    months_nb = [0, 0, 0, 0, 0, 0]
##        1325376000 - 01/01/2012 00:00:00
#    months_ts = [1345420800, 1346025600, 1346630400, 1347235200, 1347840000, 1348444800] #, 1341100800, 1343779200, 1346457600, 1349049600]
#    
#    numbuilds_pm = 0
#    for build_no in builds_dict['cachedBuilds']:
##        print build_no
##        print 'http://pub-bb3.dev.cyaninc.com:8011/json/builders/buildmasterUpdater/builds/' + str(build_no) + '?as_text=1'
#        j_data_temp = ""
#        try: j_data_temp = urlopen('http://pub-bb3.dev.cyaninc.com:8011/json/builders/buildmasterUpdater/builds/' + str(build_no) + '?as_text=1')
#        except URLError, e:
#            print e
#        jsondata_temp = simplejson.loads(j_data_temp.read())
##        print jsondata_temp
#        build_month_ts = jsondata_temp["times"][1]
##        print build_month_ts
#        if (build_month_ts >= months_ts[0] and build_month_ts <= months_ts[1]):
##            print months_nb[0]
#            months_nb[0] += 1;
#        
#        elif (build_month_ts >= months_ts[1] and build_month_ts <= months_ts[2]):
#            months_nb[1] += 1;
#        elif (build_month_ts >= months_ts[2] and build_month_ts <= months_ts[3]):
#            months_nb[2] += 1;
#        elif (build_month_ts >= months_ts[3] and build_month_ts <= months_ts[4]):
#            months_nb[3] += 1;                        
#        
#        elif (build_month_ts >= months_ts[4] and build_month_ts <= months_ts[5]):
#            months_nb[4] += 1;
#        
#        elif (build_month_ts >= months_ts[5] and build_month_ts <= time.time()):
#            months_nb[5] += 1;
##        elif (build_month_ts >= months_ts[6] and build_month_ts <= months_ts[7]):
##            months_nb[6] += 1;
##        elif (build_month_ts >= months_ts[7] and build_month_ts <= months_ts[8]):
##            months_nb[7] += 1;
##        elif (build_month_ts >= months_ts[8] and build_month_ts <= months_ts[9]):
##            months_nb[8] += 1;
#
#    print months_nb
#    jsondict3 = {}
#    j = 0
#    for i in months_ts:
#        jsondict3[i] = months_nb[j]
#        j += 1
#    
##    for key, value in months_ts, months_nb:
##        print key, months_nb[key]
##        jsondict3[key] = months_nb[key] 
#    
#    print jsondict3
    
    jsondict3 = {'1325376000': 29, '1328054400': 34, '1335830400': 1, '1330560000': 31, '1349049600': 1, '1343779200': 31, '1346457600': 25, '1338508800': 1, '1333238400': 5, '1341100800': 20}
    jsondict4 = {'1345420800': 7, '1346025600': 7, '1347840000': 7, '1347235200': 7, '1348444800': 2, '1346630400': 7}
    return {'jd1' : jsondict1, 'jd2' : jsondict2, 'jd3' : jsondict3, 'jd4': jsondict4}
#    return {'jd1' : jsondict1, 'jd2' : jsondict2 }