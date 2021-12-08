from django import forms
from .models import publicacion
from django.contrib.auth.models import User

elegirCategoria =(
    ("Comida", "Comida"),
    ("Bebida", "Bebida"),
    ("Ropa", "Ropa"),
    
)
class formPublicacion(forms.ModelForm):
    contenido =  forms.CharField(label='', widget=forms.Textarea(attrs={'class':'form-control border-0','rows':'5','cols':'30'}))
    categoria = forms.MultipleChoiceField(widget=forms.SelectMultiple(attrs={'class':'form-select border-0 bg-gray w-75 fs-7', 'aria-label':'Default select comida'}), choices=elegirCategoria)
    imagen = forms.ImageField(widget=forms.FileInput(attrs={'type':'file','placeholder':'Agrega una foto a tu publicacion'}))

    class Meta:
                model = publicacion
                fields = ['contenido', 'categoria','imagen']
