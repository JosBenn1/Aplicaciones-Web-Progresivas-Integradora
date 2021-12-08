from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

from account.models import Account

# Create your models here. 
class publicacion(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='publicaciones')
    contenido = models.TextField(max_length=200) 
    categoria =  models.CharField(max_length=40)
    imagen = models.ImageField(upload_to="publicacion")
    timestamp =  models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'publicacion'
        db_table = 'publicacion'