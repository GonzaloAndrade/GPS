from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import Context, loader
# Create your views here.
from django.http import HttpResponse
from endless_pagination.decorators import page_template
from django.template import RequestContext
from django.views import generic


def index():
    template = loader.get_template("Home/index.html")
    return HttpResponse(template.render())
