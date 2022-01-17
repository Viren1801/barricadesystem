from datetime import date, datetime

from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
	email = models.EmailField(_('email address'), unique=True,null=False,blank=False)
	first_name = models.CharField(_('first name'), max_length=30, blank=True)
	last_name = models.CharField(_('last name'), max_length=30, blank=True)
	date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
	is_active = models.BooleanField(_('active'), default=True)
	is_staff = models.BooleanField(_('staff status'),default=False)


	objects = UserManager()

	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = []

class NumberPlate(models.Model):
	id = models.AutoField(primary_key=True)
	first_name = models.CharField(_('first name'), max_length=30, blank=True)
	last_name = models.CharField(_('last name'), max_length=30, blank=True)
	Plate_number = models.CharField(_('plate number'), max_length=30, blank=True)
	#created_by = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.DO_NOTHING,related_name='created_by',default='',null=True,blank=True)
	created_by = models.ForeignKey(User, on_delete=models.CASCADE,related_name='created_by',default='',null=True,blank=False)
	created_date = models.DateField(auto_now_add=True)
	#modify_by = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.DO_NOTHING,related_name='modify_by',default='',null=True,blank=True)
	modify_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='modify_by',default='',null=True,blank=False)
	modify_date = models.DateField(auto_now_add=True)

	class meta:
		ordering = ['-created_date']
		verbose_name = 'NumberPlate'
		verbose_name_plural = 'Numbers'

	def __str__(self):
		return self.first_name
