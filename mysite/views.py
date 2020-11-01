from django.conf import settings
from django.shortcuts import render, HttpResponse
from django.views.generic import (TemplateView, FormView, ListView, DetailView)
from django.core.mail import send_mail
from mysite.models import Blog
from mysite.models import subscriber
from mysite.forms import subscriberForm
from django.core.paginator import Paginator



# Create your views here.

def error_404(request, exception):
    return render(request, '404.html', status=404)

def error_500(request, exception=None):
    return render(request, '500.html', status=500)


class HomePageView(TemplateView):
    template_name ='index.html'

class AboutPageView(TemplateView):
    template_name ='about.html'

class PortfolioView(TemplateView):
    template_name ='portfolio.html'

class BlockchainView(TemplateView):
    template_name ='blockchain.html'

class TermsView(TemplateView):
    template_name ='terms.html'

class PrivacyView(TemplateView):
    template_name ='privacy.html'


class Bloglist(ListView):
    model = Blog
    template_name = 'bloglist.html'
    paginate_by = 10
    blog = Blog.objects.filter(status=1).order_by('-created_on')

def listing(request):
    blog_list = Blog.objects.all()
    paginator = Paginator(blog_list, 10) # Show 10 blogs per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'bloglist.html', {'page_obj': page_obj})

class BlogDetail(DetailView):
    model = Blog
    template_name = 'blogdetail.html'

def contact(request):
    template_name='contact.html'
    success_url = 'contact.html'

    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        send_mail(
        subject= "Enquire from website -" + name,
        message= message,
        from_email= email,
        recipient_list=[settings.EMAIL_HOST_USER],
        fail_silently = True,
        )
        context={
        'name': name,
        }
        return render(request,template_name, context)
    else:
        return render(request, success_url)

def subscriberView(request):
    success_url = 'index.html'

    if request.method =='POST':

        form_class = subscriberForm(request.POST or None)

        if form_class.is_valid():
            f = form_class.save(commit=False)
            if subscriber.objects.filter(email=f.email).exists():
                print('Email already exists in our database')
            else:
                f.save()
    else:
        form_class =subscriberForm()

    context = {
    'form_class': form_class,
    }

    return render(request, success_url, context)
