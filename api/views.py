from django.shortcuts import render
# import django_filters.rest_framework
from rest_framework import generics
from rest_framework import filters
# from django_filters import filters
from api.models import Book
from api.serializers import BookSerializer


class BookList(generics.ListCreateAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'author')

    # def get_queryset(self):
    #     queryset = Book.objects.all()
    #     title_part = self.request.query_params.get('title', None)

    #     if title_part is not None:
    #         queryset = queryset.filter(title__icontains=title_part)
    #     return queryset


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
