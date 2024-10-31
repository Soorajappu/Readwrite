# Generated by Django 5.0.6 on 2024-07-17 14:28

import ckeditor.fields
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auther_name', models.CharField(max_length=255)),
                ('book_name', models.CharField(max_length=255, unique=True)),
                ('description', models.TextField(unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('published', models.BooleanField(default=False)),
                ('genres', models.CharField(max_length=255)),
                ('no_of_pages', models.IntegerField(default=0)),
                ('language', models.CharField(default='', max_length=100)),
                ('background_image', models.ImageField(blank=True, null=True, upload_to='background_image/')),
            ],
        ),
        migrations.CreateModel(
            name='Pages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('content', ckeditor.fields.RichTextField()),
                ('page_number', models.IntegerField()),
                ('published', models.BooleanField(default=False)),
                ('created_date', models.DateField(auto_now_add=True)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pages', to='users.books')),
            ],
        ),
    ]
