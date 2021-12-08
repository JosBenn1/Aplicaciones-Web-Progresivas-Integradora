from django.shortcuts import render
from django.conf import settings



from django.views.generic import TemplateView, View
from django.shortcuts import get_object_or_404, redirect, render, redirect
from django.core.paginator import Paginator
from publicacion.forms import formPublicacion
from django.contrib import messages

from publicacion.models import publicacion
from .models import *
from account.models import Account
from friend.views import friends_list_view
from account.models import Account
from friend.models import FriendRequest, FriendList

DEBUG = False




def home_screen_view(request):
			posts = publicacion.objects.all()
			form = formPublicacion(request.POST, files=request.FILES)
			context = {}	
			context['debug_mode'] = settings.DEBUG
			context['debug'] = DEBUG
			context['room_id'] = "1"
			context['posts'] = posts
			context['form'] = form
			
			if request.method == 'POST':
				current_user =  get_object_or_404(Account, pk=request.user.pk)
				form = formPublicacion(request.POST, files=request.FILES)
				if form.is_valid():
					post = form.save(commit=False)
					post.user = current_user
					post.save()
					return redirect('home')
			else:
				
				form = formPublicacion()
				conte= {'form' : form,}		
			return render(request, "personal/home.html", context, conte)

			

def informacionPersonal(request, username=None):
    current_user = request.user
    if username and username != current_user.username:
        user = Account.objects.get(username=username)
        # posts = user.publicaciones.all()
    else:
        # posts = current_user.publicaciones.all()
        user = current_user
    return render(request, "account/account.html", {'user':user}) 



def ubicacion(request):
    return render(request, "personal/ubicacion.html") 








