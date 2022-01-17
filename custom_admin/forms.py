from django import forms
from .models import NumberPlate
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model

class UserForm(UserCreationForm):

    class Meta:
        User = get_user_model()
        model = User
        # fields = '__all__'
        fields = ('email','first_name','last_name','groups','user_permissions','is_active','password1','password2','is_staff')



    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['placeholder'] = 'email'
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last name'
        self.fields['groups'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['class'] = 'form-control'


class UserUpdateForm(UserChangeForm):

    class Meta:
        User = get_user_model()
        model = User
        fields = ('email','first_name','last_name','groups','is_active')



    def __init__(self, *args, **kwargs):
        super(UserUpdateForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['placeholder'] = 'email'
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last name'
        self.fields['groups'].widget.attrs['class'] = 'form-control'


class RegisterForm(UserCreationForm):

    class Meta:
        User = get_user_model()
        model = User
        fields = ('email','first_name','last_name','password1','password2',)

    def __init__(self, *args, **kwargs):
        super(RegisterForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['placeholder'] = 'email'
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last name'
        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['placeholder'] = 'password'
        self.fields['password2'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].widget.attrs['placeholder'] = 'confirm password'


class ChangeDetailForm(forms.ModelForm):

    class Meta:
        User = get_user_model()
        model = User
        fields = ('first_name','last_name',)

    def __init__(self, *args, **kwargs):
        super(ChangeDetailForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first_name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last_name'

class OldPassForm(forms.Form):
    old_password = forms.CharField()

    class Meta:
        fields = ('old_password',)

    def __init__(self, *args, **kwargs):
        super(OldPassForm, self).__init__(*args, **kwargs)
        self.fields['old_password'].widget.attrs['class'] = 'form-control'
        self.fields['old_password'].widget.attrs['placeholder'] = 'old_password'
        self.fields['old_password'].widget.attrs['autocomplete'] = 'off'

#---------------------------------------Number plate forms------------------------------------------

class NumberForm(forms.ModelForm):

    class Meta:
        model = NumberPlate
        # fields = '__all__'
        fields = ('first_name', 'last_name', 'Plate_number', 'created_by')

    def __init__(self, *args, **kwargs):
        super(NumberForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last name'
        self.fields['Plate_number'].widget.attrs['class'] = 'form-control'
        self.fields['Plate_number'].widget.attrs['placeholder'] = 'plate number'
        self.fields['created_by'].widget.attrs['class'] = 'form-control'


class NumberUpdateForm(forms.ModelForm):

    class Meta:
        model = NumberPlate
        fields = ('first_name', 'last_name', 'Plate_number', 'modify_by')



    def __init__(self, *args, **kwargs):
        super(NumberUpdateForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['first_name'].widget.attrs['placeholder'] = 'first name'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['placeholder'] = 'last name'
        self.fields['Plate_number'].widget.attrs['class'] = 'form-control'
        self.fields['Plate_number'].widget.attrs['placeholder'] = 'plate number'
        self.fields['modify_by'].widget.attrs['placeholder'] = 'plate number'
