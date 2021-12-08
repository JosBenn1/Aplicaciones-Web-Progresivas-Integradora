from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from publicacion.models import publicacion



class AccountAdmin(UserAdmin):
	
	list_display = ('user','contenido','categoria', 'imagen', 'timestamp')
	readonly_fields=('timestamp')



admin.site.register(publicacion)