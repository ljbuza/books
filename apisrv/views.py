from django.core.urlresolvers import reverse_lazy
from django.shortcuts import redirect


def redirect_to_home(request):
    # assuming home has an urlconf name of 'home'
    return redirect(reverse_lazy('api/books'))
