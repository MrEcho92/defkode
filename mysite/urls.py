from django.contrib import admin
from django.urls import path, include
from mysite.views import AboutPageView, PortfolioView, BlockchainView, Bloglist, BlogDetail, TermsView, PrivacyView
from mysite import views

app_name ='mysite'

urlpatterns = [
    path('', views.subscriberView, name='subscriber'),
    path('contact/', views.contact, name= 'contact'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('terms/', TermsView.as_view(), name='terms'),
    path('privacy/', PrivacyView.as_view(), name='privacy'),
    path('portfolio/', PortfolioView.as_view(), name='portfolio'),
    path('blockchain/', BlockchainView.as_view(), name='blockchain'),
    path('blog/', Bloglist.as_view(), name='bloglist'),
    path('<slug:slug>/', BlogDetail.as_view(), name='blogdetail'),

]
