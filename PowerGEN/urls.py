from django.conf.urls import  include, url
from django.contrib import admin
from django.conf.urls import url
from django.views.generic.base import TemplateView

from Home import views


urlpatterns = [
    # Examples:
    # url(r'^$', 'PowerGEN.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', include('Home.urls', namespace="Home")),
    url(r'^admin/', include(admin.site.urls)),
]
