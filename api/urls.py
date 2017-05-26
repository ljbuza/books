from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.BookList.as_view(), name='book-list'),
    url(r'^books/$', views.BookList.as_view(), name='book-list'),
    url(r'^books/(?P<pk>[0-9]+)$', views.BookDetail.as_view())
]
