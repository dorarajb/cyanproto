from django.conf.urls.defaults import *
from django.conf import settings
import cyanproto.views as views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    ( r'^resources/(?P<path>.*)$',
      'django.views.static.serve',
      { 'document_root': settings.MEDIA_ROOT } ),
    url( r'^$', views.index, name="index" ) ,
)

